import { Component, Input, OnInit } from '@angular/core';
import { MoveModel } from 'src/app/models/move.model';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss'],
})
export class MoveListComponent implements OnInit {
  @Input() moves: MoveModel[];
  constructor() {}

  ngOnInit(): void {
    console.log(this.moves);
  }
}
