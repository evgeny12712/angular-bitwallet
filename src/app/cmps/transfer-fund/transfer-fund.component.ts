import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactModel } from 'src/app/models/contact.model';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferFundComponent implements OnInit {
  amount: string;
  @Input() contact: ContactModel;
  user: UserModel;
  userSubscriber: Subscription;

  constructor(private userService: UserService, private router: Router) {}
  onTransfer() {
    if (this.user.coins < +this.amount) {
      console.log("can't make transaction!");
      return;
    }
    this.userService.addMove(this.contact, +this.amount);
    this.router.navigateByUrl('');
  }
  ngOnInit(): void {
    this.userSubscriber = this.userService.user$.subscribe(
      (user) => (this.user = user)
    );
  }
}
