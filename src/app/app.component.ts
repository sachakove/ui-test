import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';

  toggleBar(e) {
    const bar = document.getElementById('bar');
    e === true ? bar.style.display = 'block' : bar.style.display = 'none';
  }
  
}


