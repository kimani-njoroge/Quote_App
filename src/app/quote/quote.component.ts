import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = []

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }

  deleteQuote(isComplete,index){
    if (isComplete){
      this.quotes.splice(index,1)
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
