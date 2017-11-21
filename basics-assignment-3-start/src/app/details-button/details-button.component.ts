import { Component } from '@angular/core';

@Component({
  selector: 'app-details-button',
  templateUrl: './details-button.component.html',
  styles: [`
    .over-five {
      color: white;
    }
  `]
})
export class DetailsButtonComponent {
  toggler = true;
  clicks = [];


  onButtonClicked() {
    this.toggler = !this.toggler;
    this.clicks = [...this.clicks, this.clicks.length + 1];
  }

  getBackgroundColor(item: number) {
    return item >= 5 ? 'blue' : 'transparent';
  }
}
