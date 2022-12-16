import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['close-elf-8504-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y2xvc2UtZWxmLTg1MDQkNG8XqXsjFWKtGCD3gQ8Pfre74HBnnAVSvQHp398TLUI',
          password:
            'cz2vLC_8c32rvQKSGl7OHNyvQCyjX9N4hSEdadzRmrjhmB_4i4UyPVYfow2zAeQh5VA4zQ==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
