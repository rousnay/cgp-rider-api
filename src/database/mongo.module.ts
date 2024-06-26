import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigService } from 'src/config/config.service';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        // uri: configService.get('MONGODB_URI'),
        uri: configService.mongodbUri,
      }),
    }),
  ],
})
export class MongoModule {}
