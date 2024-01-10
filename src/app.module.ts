import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CurrencyApiModule } from '@app/currency-api';
import { CurrencyConvertModule } from './currency-convert/currency-convert.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    CurrencyApiModule,
    CurrencyConvertModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
