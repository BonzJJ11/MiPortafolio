import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PROJECTS } from '../../data/portfolio.data';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ProjectCardComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {
  projects = PROJECTS;
}
