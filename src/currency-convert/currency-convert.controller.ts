import { Controller, Get, Query } from '@nestjs/common';
import { CurrencyConvertService } from './currency-convert.service';

@Controller('currency-convert')
export class CurrencyConvertController {
    constructor(private readonly currencyConvertService: CurrencyConvertService){}

    @Get()
    getCurrency(){
        return this.currencyConvertService.getCurrency();
    }

    @Get('/convert')
    async convertCurrency(
        @Query('amount') amount: number,
        @Query('from') from: string,
        @Query('to') to: string,
    ) {
        const result = await this.currencyConvertService.convertCurrency(amount, from, to);
        return result;
    }
}
