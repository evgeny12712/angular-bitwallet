import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';

import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
})
export class SingupComponent implements OnInit {
  user: UserModel;
  constructor(public userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.user = new UserModel();
  }

  onSignup(): void {
    console.log(this.user);
    this.userService.signup(this.user.name);
    this.router.navigateByUrl('');
  }
}
