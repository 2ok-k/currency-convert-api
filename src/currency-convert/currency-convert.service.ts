import { Injectable } from '@nestjs/common';
import { CurrencyApiService } from '../../libs/currency-api/src/currency-api.service';

@Injectable()
export class CurrencyConvertService {
    constructor(private readonly currencyApiService: CurrencyApiService){}

    async getCurrency(){
        return this.currencyApiService.getCurrency();
    }

    async convertCurrency(amount: number, from: string, to: string) {
        const currencies = await this.getCurrency();
        const fromRate = currencies.rates[from];
        const toRate = currencies.rates[to];

        if (!fromRate || !toRate) {
            throw new Error('Impossible de trouver les taux de change pour les devises spécifiées.');
        }

        const convertedAmount = (amount * toRate) / fromRate;
        return { amount: convertedAmount, from, to };
    }
}
