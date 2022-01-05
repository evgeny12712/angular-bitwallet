import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactModel } from '../..//models/contact.model';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  contact: ContactModel;
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(async ({ id }) => {
      this.contact = id
        ? await this.contactService.getContactById(id).toPromise()
        : (this.contactService.getEmptyContact() as ContactModel);
    });
  }

  onRemoveContact() {
    this.contactService.deleteContact(this.contact._id);
    this.router.navigateByUrl('contacts');
  }
  async onSaveContact() {
    await this.contactService.saveContact(this.contact);
    this.router.navigateByUrl('contacts');
  }
}
