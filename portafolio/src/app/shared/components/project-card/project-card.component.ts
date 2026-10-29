import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { PortfolioProject } from '../../../core/models/portfolio-project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: PortfolioProject;
}
