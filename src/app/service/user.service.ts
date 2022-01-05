import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserModel } from '../models/user.model';
import { ContactModel } from '../models/contact.model';
import { MoveModel } from 'src/app/models/move.model';

import { storageService } from './storageService';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private KEY = 'user';
  private _user: UserModel;
  private _user$ = new BehaviorSubject<UserModel>(
    storageService.load(this.KEY) || null
  );
  public user$ = this._user$.asObservable();

  constructor() {}

  public signup(name: string): void {
    let user = storageService.load(this.KEY);
    if (!user) {
      let newUser = new UserModel();
      newUser.name = name;
      storageService.store(this.KEY, newUser);
      this._user = newUser;
      console.log(user);
    }
    this._user$.next(this._user);
  }

  public getUser() {
    return this.user$;
  }

  public addMove(contact: ContactModel, amount: number): void {
    let newMove = new MoveModel(contact._id, contact.name, Date.now(), amount);
    // newMove.toId = this.storageService.setId();
    // newMove.to = contact.name;
    // newMove.at = Date.now();
    // newMove.amount = amount;
    const editedUser = { ...this._user$.value };
    editedUser.coins -= amount;
    editedUser.moves.unshift(newMove);
    storageService.store(this.KEY, editedUser);
    this._user$.next(editedUser);
  }

  public isAuthenticated(): boolean {
    const user = this._user$.getValue();
    return !!user;
    // return (user) ? true : false;
  }
}
