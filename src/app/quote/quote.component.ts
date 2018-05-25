import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,'quote1','Don Giovanni','kimani'),
    new Quote(2,'quote2','paulo coelho','anna'),
    new Quote(3,'quote3','Ohana','lilo n stitch'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
