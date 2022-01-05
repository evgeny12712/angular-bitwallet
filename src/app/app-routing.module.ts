import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SingupComponent } from './pages/singup/singup.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { AuthService } from './service/auth.service';

const routes: Routes = [
  { path: 'signup', component: SingupComponent },
  {
    path: 'edit/:id',
    component: ContactEditComponent,
    canActivate: [AuthService],
  },
  { path: 'edit', component: ContactEditComponent, canActivate: [AuthService] },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    canActivate: [AuthService],
  },
  {
    path: 'statistics',
    component: StatisticPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'contacts',
    component: ContactPageComponent,
    canActivate: [AuthService],
  },
  { path: '', component: HomePageComponent, canActivate: [AuthService] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
