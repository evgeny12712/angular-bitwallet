import { storageService } from './storageService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class bitcoinService {
  constructor(private http: HttpClient) {}

  private getData(type: string) {
    switch (type) {
      case 'marketPrice':
        return this.http
          .get(
            'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
          )
          .toPromise();
      // .subscribe((data: string) => {
      //   storageService.store(type, data);
      //   return data;
      // });
      case 'bitcoinRate':
        return this.http
          .get('https://blockchain.info/tobtc?currency=USD&value=1')
          .toPromise();
      case 'tradeVolume':
        return this.http
          .get(
            'https://api.blockchain.info/charts/trade-volume?timespan=2months&format=json&cors=true'
          )
          .toPromise();
      // .subscribe((data: string) => {
      //   storageService.store(type, data);
      //   return data;
      // });
      default:
        return this.http
          .get(
            'https://api.blockchain.info/charts/trade-volume?timespan=2months&format=json&cors=true'
          )
          .toPromise();
      // .subscribe((data: string) => {
      //   storageService.store(type, data);
      //   return data;
      // });
    }
  }

  public async loadData(type: string) {
    let requestedData = storageService.load(type);
    if (!requestedData) {
      console.log(`Loading ${type} data from api...`);
      requestedData = await this.getData(type);
      storageService.store(type, requestedData);
    }
    return requestedData;
  }
}
