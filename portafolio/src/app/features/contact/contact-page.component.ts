import { Component } from '@angular/core';

import { PROFILE } from '../../data/portfolio.data';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  profile = PROFILE;
}
