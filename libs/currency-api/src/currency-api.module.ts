import { Module } from '@nestjs/common';
import { CurrencyApiService } from './currency-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[HttpModule],
  providers: [CurrencyApiService],
  exports: [CurrencyApiService],
})
export class CurrencyApiModule {}
