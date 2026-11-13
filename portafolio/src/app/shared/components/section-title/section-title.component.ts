import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="section-header">
      <div class="subtitle-badge" *ngIf="subtitle">
        <span class="badge-dot"></span>
        <span class="subtitle-text">{{ subtitle }}</span>
      </div>
      <h2 class="title">{{ title }}</h2>
      <p class="description" *ngIf="description">{{ description }}</p>
    </header>
  `,
  styles: [`
    .section-header {
      margin-bottom: 2rem;
    }

    .subtitle-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(0, 180, 255, 0.08);
      border: 1px solid rgba(0, 180, 255, 0.25);
      padding: 0.25rem 0.75rem;
      border-radius: var(--radius-pill);
      margin-bottom: 0.75rem;
    }

    .badge-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--color-brand-blue);
    }

    .subtitle-text {
      color: var(--color-brand-blue);
      font-size: 0.78rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-primary-dark);
      letter-spacing: -0.02em;
      line-height: 1.2;
      margin: 0;
    }

    .description {
      margin: 0.5rem 0 0;
      font-size: 1rem;
      color: var(--neutral-600);
      max-width: 650px;
    }

    @media (max-width: 640px) {
      .title {
        font-size: 1.6rem;
      }
    }
  `]
})
export class SectionTitleComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() description = '';
}
