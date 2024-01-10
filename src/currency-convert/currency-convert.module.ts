import { Module } from '@nestjs/common';
import { CurrencyConvertService } from './currency-convert.service';
import { CurrencyApiModule } from '@app/currency-api';
import { CurrencyConvertController } from './currency-convert.controller';

@Module({
  imports: [
    CurrencyApiModule
  ],
  providers: [CurrencyConvertService],
  controllers: [CurrencyConvertController]
})
export class CurrencyConvertModule {}
