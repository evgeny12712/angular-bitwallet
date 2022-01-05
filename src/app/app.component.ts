import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() page = 'home';
  title = 'angular-bitwallet-app';

  onSelectedPage(page: string) {
    this.page = page;
  }
}
