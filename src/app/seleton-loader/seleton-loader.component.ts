import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seleton-loader',
  templateUrl: './seleton-loader.component.html',
  styleUrls: ['./seleton-loader.component.scss'],
})
export class SeletonLoaderComponent implements OnInit {
  @Input() Cwidth;
  @Input() Cheigth;
  @Input() circle: boolean;

  constructor() {}

  getMyStyles() {
    const myStyles = {
      'width.px': this.Cwidth ? this.Cwidth : '',
      'height.px': this.Cheigth ? this.Cheigth : '',
      'border-radius': this.circle ? '50%' : '',
    };
    return myStyles;
  }

  ngOnInit(): void {}
}
