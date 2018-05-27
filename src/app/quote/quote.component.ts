import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = []

  upV(id){
    this.quotes[id].upvote+=1
  }
  downV(id){
    this.quotes[id].downvote+=1
  }

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
  public voteGet(i){
    return this.quotes[i].upvote-this.quotes[i].downvote
  }
  getHighest(){
    var highestVotes = this.quotes.reduce(function(l,e){
      return e.upvote > l.upvote ? e : l;
    })
    return highestVotes.upvote;
  }

  constructor() { }

  ngOnInit() {
  }

}
