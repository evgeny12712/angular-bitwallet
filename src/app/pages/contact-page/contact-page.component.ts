import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/models/contact.model';
import { Observable, Subscription } from 'rxjs';

import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contacts: ContactModel[];
  contacts$: Observable<ContactModel[]>;

  constructor(private contactService: ContactService) {}

  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId);
  }
  ngOnInit(): void {
    this.contactService.loadContacts();
    this.contacts$ = this.contactService.contacts$;
  }
}
