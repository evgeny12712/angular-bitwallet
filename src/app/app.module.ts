import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { FormsModule } from '@angular/forms';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { SingupComponent } from './pages/singup/singup.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactPageComponent,
    HomePageComponent,
    StatisticPageComponent,
    ChartComponent,
    AppHeaderComponent,
    SingupComponent,
    TransferFundComponent,
    MoveListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
