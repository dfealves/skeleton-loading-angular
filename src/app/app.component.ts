import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'skeletonScreen';
  loaded = false;

  ngOnInit() {
    setInterval(() => {
      this.loaded = true;
    }, 3000); // se os dados vierem de uma api remover os 3seg
  }
}
