import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';

import { PROJECTS } from '../../data/portfolio.data';
import { PortfolioProject } from '../../core/models/portfolio-project.model';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    SelectButtonModule,
    TagModule,
    SectionTitleComponent,
    ProjectCardComponent
  ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {
  allProjects = PROJECTS;
  selectedFilter = 'Todos';

  filterOptions = [
    { label: 'Todos', value: 'Todos' },
    { label: 'Full Stack', value: 'Full Stack' },
    { label: 'Frontend / PrimeNG', value: 'Frontend' }
  ];

  get filteredProjects(): PortfolioProject[] {
    if (this.selectedFilter === 'Todos') {
      return this.allProjects;
    }
    if (this.selectedFilter === 'Full Stack') {
      return this.allProjects.filter(p => p.category === 'Full Stack');
    }
    if (this.selectedFilter === 'Frontend') {
      return this.allProjects.filter(p => 
        p.technologies.includes('PrimeNG') || p.category === 'Frontend'
      );
    }
    return this.allProjects;
  }
}
