import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';

import {
  PROFILE,
  SKILLS,
  SOLID_EVALUATION,
  ARCHITECTURE_PILLARS,
  TARGET_ARCHITECTURE_PROPOSAL,
  SECURITY_BEST_PRACTICES
} from '../../data/portfolio.data';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    CardModule,
    ButtonModule,
    TagModule,
    ChipModule,
    SelectButtonModule,
    TooltipModule,
    SectionTitleComponent
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  profile = PROFILE;
  skills = SKILLS;
  solidPrinciples = SOLID_EVALUATION;
  architecturePillars = ARCHITECTURE_PILLARS;
  targetArchitecture = TARGET_ARCHITECTURE_PROPOSAL;
  securityPractices = SECURITY_BEST_PRACTICES;

  frontendSkills = SKILLS.filter(s => s.category === 'Frontend' || s.category === 'UI / UX');
  backendSkills = SKILLS.filter(s => s.category === 'Backend' || s.category === 'Database' || s.category === 'Tools');
  archSkills = SKILLS.filter(s => s.category === 'Arquitectura');

  activeTab: 'arquitectura' | 'solid' | 'seguridad' = 'arquitectura';

  tabOptions = [
    { label: 'Estructuras & Modelos', value: 'arquitectura', icon: 'pi pi-sitemap' },
    { label: 'Principios SOLID', value: 'solid', icon: 'pi pi-shield' },
    { label: 'Seguridad & Evolución', value: 'seguridad', icon: 'pi pi-lock' }
  ];
}
