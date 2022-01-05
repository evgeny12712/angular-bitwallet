import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { bitcoinService } from '../../service/bitcoin.service';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  userSubscriber: Subscription;

  constructor(
    private userService: UserService,
    private bitcoinService: bitcoinService,
    private router: Router
  ) {}

  bitcoinRate: string;
  user: UserModel;

  async ngOnInit() {
    this.bitcoinRate = await this.bitcoinService.loadData('bitcoinRate');
    this.userSubscriber = this.userService.user$.subscribe(
      (user) => (this.user = user)
    );
    // if (!this.user) {
    //   this.router.navigateByUrl('/signup');
    // }
  }
}
