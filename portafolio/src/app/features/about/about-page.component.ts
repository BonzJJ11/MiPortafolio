import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PROFILE, SKILLS } from '../../data/portfolio.data';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  profile = PROFILE;
  skills = SKILLS;
}
