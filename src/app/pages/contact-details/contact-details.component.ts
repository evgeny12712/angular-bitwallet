import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactModel } from '../../models/contact.model';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  contact: ContactModel;
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onBack() {
    this.router.navigateByUrl('contacts');
  }

  async ngOnInit(): Promise<void> {
    console.log();
    this.route.params.subscribe(async (params) => {
      const { id } = params;
      const contact = await this.contactService.getContactById(id).toPromise();
      this.contact = contact;
    });
  }
}
