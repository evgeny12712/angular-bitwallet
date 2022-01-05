import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactFilter } from '../../models/contact.filter.model';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss'],
})
export class ContactFilterComponent {
  filterBy: ContactFilter = { term: '', phone: '', email: '' };
  subscription: Subscription;
  constructor(private contactService: ContactService) {}

  onSetFilter() {
    this.contactService.loadContacts(this.filterBy);
  }
}
