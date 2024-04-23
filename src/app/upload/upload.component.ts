import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  providers: [ApiService],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';
  file: any ;
  constructor(private apiService: ApiService) { }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
    // Validazione del formato del file
    if (!this.isValidFileFormat(this.file)) {
      this.showModal = true;
      this.modalTitle = 'Formato non supportato';
      this.modalMessage = 'Il formato del file non è supportato. Si prega di caricare un file JSON, XLSX, JPG o JPEG.';
      return;
    }
    // Validazione della dimensione del file
    if (!this.isValidFileSize(this.file)) {
      this.showModal = true;
      this.modalTitle = 'Dimensione del file superata';
      this.modalMessage = 'Il file supera la dimensione massima consentita di 200MB. Si prega di scegliere un file più piccolo.';
      return;
    }
    if (event && event.target && event.target.files && event.target.files.length > 0) {
      const file: File = event.target.files[0];
      // Resto del codice per la gestione del file...
    } else {
      console.error('Nessun file selezionato.');
    }
  }
  
  uploadFile(): void {
    this.apiService.uploadFile(this.file).subscribe(
      (response: any) => {
        console.log('File uploaded successfully:', response);
        this.showModal = true;
        this.modalTitle = 'Caricamento completato';
        this.modalMessage = 'Il file è stato caricato con successo.';
      },
      (error: any) => {
        console.error('Upload failed:', error);
        this.showModal = true;
        this.modalTitle = 'Errore durante il caricamento';
        this.modalMessage = 'Si è verificato un errore durante il caricamento del file. Si prega di riprovare più tardi.';
      }
    );
  }

  isValidFileFormat(file: File): boolean {
    const allowedFormats = ['json', 'xlsx', 'xls', 'jpg', 'jpeg'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    return allowedFormats.includes(fileExtension || '');
  }

  isValidFileSize(file: File): boolean {
    const maxSize = 200 * 1024 * 1024; // 200 MB in bytes
    return file.size <= maxSize;
  }

  hideModal(): void {
    this.showModal = false;
  }

}