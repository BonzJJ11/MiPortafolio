import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';

import { PortfolioProject } from '../../../core/models/portfolio-project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TagModule, TooltipModule, BadgeModule],
  template: `
    <article class="custom-project-card">
      <div class="card-top-bar">
        <div class="card-badges">
          <span class="project-folder-icon">
            <i class="pi pi-folder"></i>
          </span>
          <p-tag [value]="project.badge" severity="info" [rounded]="true" styleClass="arch-tag" />
        </div>
        <div class="project-links">
          <a *ngIf="project.repositoryUrl" [href]="project.repositoryUrl" target="_blank" rel="noopener" pTooltip="Ver Código en GitHub" tooltipPosition="top">
            <p-button icon="pi pi-github" label="Código" [rounded]="true" [outlined]="true" severity="secondary" size="small" />
          </a>
        </div>
      </div>

      <div class="card-body">
        <h3 class="project-title">{{ project.title }}</h3>
        
        <div class="pattern-pill">
          <i class="pi pi-sitemap"></i>
          <span>{{ project.pattern }}</span>
        </div>

        <p class="project-description">{{ project.description }}</p>

        <!-- Puntos Destacados -->
        <div class="highlights-box" *ngIf="project.keyHighlights && project.keyHighlights.length > 0">
          <h4 class="highlights-title">Aspectos Técnicos Clave:</h4>
          <ul class="highlights-list">
            <li *ngFor="let item of project.keyHighlights">
              <i class="pi pi-check-circle highlight-bullet"></i>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Botón para alternar desglose de arquitectura y código -->
        <div class="architecture-toggle-wrapper" *ngIf="project.architectureDetails && project.architectureDetails.length > 0">
          <p-button 
            [label]="showArchitecture ? 'Ocultar Arquitectura' : 'Ver Desglose de Capas & Código'" 
            [icon]="showArchitecture ? 'pi pi-chevron-up' : 'pi pi-chevron-down'" 
            [text]="true" 
            size="small" 
            (click)="toggleArchitecture()" />
        </div>

        <!-- Panel Colapsable de Arquitectura -->
        <div class="architecture-details-panel" *ngIf="showArchitecture">
          <h5 class="panel-heading">Estructura & Separación de Responsabilidades:</h5>
          <div class="arch-layer-item" *ngFor="let arch of project.architectureDetails">
            <div class="arch-header">
              <span class="arch-code-name">{{ arch.component }}</span>
              <span class="arch-role-badge">{{ arch.role }}</span>
            </div>
            <p class="arch-detail-text">{{ arch.detail }}</p>
          </div>

          <!-- Enlaces Directos a los Archivos en GitHub -->
          <div class="github-files-section" *ngIf="project.githubReferences && project.githubReferences.length > 0">
            <h5 class="panel-heading">Referencias de Código Fuente:</h5>
            <div class="github-links-grid">
              <a *ngFor="let ref of project.githubReferences" [href]="ref.url" target="_blank" rel="noopener" class="github-file-link">
                <i class="pi pi-file-edit"></i>
                <span>{{ ref.label }}</span>
                <i class="pi pi-arrow-up-right external-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <div class="tech-tags">
          <span *ngFor="let tech of project.technologies" class="custom-badge" [class.highlight-tech]="tech === 'PrimeNG' || tech === 'Angular'">
            <i *ngIf="tech === 'PrimeNG'" class="pi pi-palette badge-icon"></i>
            {{ tech }}
          </span>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .custom-project-card {
      background: #FFFFFF;
      border: 1px solid var(--neutral-200);
      border-radius: var(--radius-card);
      padding: 1.5rem;
      box-shadow: var(--shadow-medium);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      position: relative;
      transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .custom-project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--color-brand-blue) 0%, var(--color-accent-purple) 100%);
      opacity: 0;
      transition: opacity 0.28s ease;
    }

    .custom-project-card:hover {
      transform: translateY(-4px);
      border-color: var(--color-brand-blue);
      box-shadow: var(--shadow-strong);
    }

    .custom-project-card:hover::before {
      opacity: 1;
    }

    .card-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
      flex-wrap: wrap;
    }

    .card-badges {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .project-folder-icon {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-md);
      background: rgba(0, 180, 255, 0.1);
      color: var(--color-brand-blue);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }

    :host ::ng-deep .arch-tag {
      font-size: 0.75rem !important;
      font-weight: 600 !important;
      padding: 0.2rem 0.65rem !important;
    }

    .card-body {
      flex: 1;
      margin-bottom: 1.25rem;
    }

    .project-title {
      font-size: 1.28rem;
      font-weight: 700;
      color: var(--color-primary-dark);
      margin: 0 0 0.5rem;
      line-height: 1.3;
    }

    .pattern-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: rgba(124, 58, 237, 0.08);
      color: var(--color-accent-purple);
      border: 1px solid rgba(124, 58, 237, 0.2);
      border-radius: var(--radius-pill);
      padding: 0.25rem 0.75rem;
      font-size: 0.78rem;
      font-weight: 600;
      margin-bottom: 0.85rem;
    }

    .project-description {
      font-size: 0.93rem;
      color: var(--neutral-600);
      line-height: 1.6;
      margin: 0 0 1rem;
    }

    .highlights-box {
      background: var(--neutral-50);
      border-left: 3px solid var(--color-brand-blue);
      padding: 0.75rem 0.9rem;
      border-radius: 0 var(--radius-md) var(--radius-md) 0;
      margin-bottom: 1rem;
    }

    .highlights-title {
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--neutral-800);
      margin: 0 0 0.45rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .highlights-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .highlights-list li {
      font-size: 0.83rem;
      color: var(--neutral-800);
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      line-height: 1.4;
    }

    .highlight-bullet {
      color: var(--support-success);
      font-size: 0.85rem;
      margin-top: 0.15rem;
      flex-shrink: 0;
    }

    .architecture-toggle-wrapper {
      margin-top: 0.75rem;
      margin-bottom: 0.5rem;
    }

    .architecture-details-panel {
      background: #FAFBFF;
      border: 1px solid rgba(0, 180, 255, 0.2);
      border-radius: var(--radius-md);
      padding: 1rem;
      margin-top: 0.75rem;
      animation: fadeIn 0.25s ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .panel-heading {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--neutral-800);
      margin: 0 0 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    .arch-layer-item {
      background: #FFFFFF;
      border: 1px solid var(--neutral-200);
      border-radius: var(--radius-sm);
      padding: 0.6rem 0.75rem;
      margin-bottom: 0.5rem;
    }

    .arch-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.25rem;
      flex-wrap: wrap;
      gap: 0.3rem;
    }

    .arch-code-name {
      font-family: monospace;
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--color-primary-dark);
      background: var(--neutral-100);
      padding: 0.1rem 0.35rem;
      border-radius: 4px;
    }

    .arch-role-badge {
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--color-brand-blue);
    }

    .arch-detail-text {
      font-size: 0.8rem;
      color: var(--neutral-600);
      margin: 0;
      line-height: 1.4;
    }

    .github-files-section {
      margin-top: 0.9rem;
      padding-top: 0.75rem;
      border-top: 1px dashed var(--neutral-300);
    }

    .github-links-grid {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .github-file-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.4rem 0.65rem;
      background: #FFFFFF;
      border: 1px solid var(--neutral-200);
      border-radius: var(--radius-sm);
      color: var(--color-primary-dark);
      text-decoration: none;
      font-size: 0.8rem;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .github-file-link:hover {
      background: rgba(0, 180, 255, 0.08);
      border-color: var(--color-brand-blue);
      color: var(--color-brand-blue);
    }

    .external-icon {
      font-size: 0.75rem;
      color: var(--neutral-400);
    }

    .card-footer {
      border-top: 1px solid var(--neutral-100);
      padding-top: 1rem;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }

    .custom-badge {
      background: var(--neutral-100);
      color: var(--neutral-800);
      border: 1px solid var(--neutral-200);
      padding: 0.25rem 0.65rem;
      border-radius: var(--radius-pill);
      font-size: 0.76rem;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      transition: all 0.2s ease;
    }

    .custom-badge.highlight-tech {
      background: rgba(0, 180, 255, 0.09);
      color: #0284C7;
      border-color: rgba(0, 180, 255, 0.35);
    }

    .badge-icon {
      font-size: 0.75rem;
    }

    .custom-project-card:hover .custom-badge {
      border-color: rgba(0, 180, 255, 0.3);
    }
  `]
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: PortfolioProject;
  showArchitecture = false;

  toggleArchitecture(): void {
    this.showArchitecture = !this.showArchitecture;
  }
}
