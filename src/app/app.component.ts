import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1,'quote1','Don Giovanni','kimani'),
    new Quote(2,'quote2','paulo coelho','anna'),
    new Quote(3,'quote3','Ohana','lilo n stitch'),
  ]

}
