import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() mainImage: string;
  @Input() name: string;
  @Input() rating: number;
  @Input() description: string;

}
