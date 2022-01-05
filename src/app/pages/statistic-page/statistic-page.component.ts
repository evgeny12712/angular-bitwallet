import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { bitcoinService } from '../../service/bitcoin.service';

Chart.register(...registerables);

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss'],
})
export class StatisticPageComponent implements OnInit {
  constructor(private bitcoinService: bitcoinService) {}
  marketPrice: Array<any>;
  tradeVolume: Array<any>;
  chartsData: Array<any>;
  async ngOnInit() {
    this.tradeVolume = await this.bitcoinService.loadData('tradeVolume');
    this.marketPrice = await this.bitcoinService.loadData('marketPrice');
    this.chartsData = [this.tradeVolume, this.marketPrice];
  }
}
