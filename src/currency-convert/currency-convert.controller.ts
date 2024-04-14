import { Controller, Get, Query } from '@nestjs/common';
import HttpResponse from 'src/response/response';
import { CurrencyConvertService } from './currency-convert.service';

@Controller('currency-convert')
export class CurrencyConvertController {
  constructor(
    private readonly currencyConvertService: CurrencyConvertService,
  ) {}

  @Get()
  getCurrency() {
    const message = 'Toutes les monnaies chargées avec succès!';
    return HttpResponse.send(
      this.currencyConvertService.getCurrency(),
      message,
    );
  }

  @Get('/convert')
  async convertCurrency(
    @Query('amount') amount: number,
    @Query('from') from: string,
    @Query('to') to: string,
  ) {
    const message = 'Converti avec succès!';
    return HttpResponse.send(
      this.currencyConvertService.convertCurrency(amount, from, to),
      message,
    );
  }
}
