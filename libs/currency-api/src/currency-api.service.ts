import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { API_KEY, BASE_URL } from 'common/shared/const';

@Injectable()
export class CurrencyApiService {
    constructor(private readonly httpService: HttpService){}

    async getCurrency() {
        const res = await this.httpService.axiosRef.get(`${BASE_URL}/latest?access_key=${API_KEY}&base=EUR`);
        return res.data
    }
}
