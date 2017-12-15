import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: string;
  @Input() borderRadius: number;

  getClasses(): string {
    let result = 'button ';

    result += this.type === 'green' ?
      'button--green ' :
      this.type === 'yellow' ?
        'button--yellow' :
        'button--white';

    return result;
  }
}
