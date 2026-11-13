import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageModule } from 'primeng/message';

import { PROFILE } from '../../data/portfolio.data';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    MessageModule,
    SectionTitleComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  profile = PROFILE;

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitted = false;

  handleSubmit() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      this.isSubmitted = true;
      // Prepara enlace directo de mailto para el usuario
      const mailtoUrl = `mailto:${this.profile.email}?subject=${encodeURIComponent(
        this.contactForm.subject || 'Contacto desde Portafolio'
      )}&body=${encodeURIComponent(
        `Nombre: ${this.contactForm.name}\nCorreo: ${this.contactForm.email}\n\nMensaje:\n${this.contactForm.message}`
      )}`;
      window.open(mailtoUrl, '_blank');
    }
  }
}
