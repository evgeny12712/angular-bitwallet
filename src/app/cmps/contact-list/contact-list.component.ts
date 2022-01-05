import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactModel } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  @Input() contacts: ContactModel[];
  @Output() onRemove = new EventEmitter<string>();
  constructor() {}
}
