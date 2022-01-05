import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactModel } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: ContactModel;
  @Output() onRemove = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onDelete($event: Event, contactId: string) {
    $event.stopPropagation();
    this.onRemove.emit(contactId);
  }
}
