export class Quote {
  constructor(public id:number,public quoteDisplay:string,public author:string,public submittedBy:string, public upvote:number, public downvote:number, public timePost:Date){
    this.upvote= 0;
    this.downvote = 0;
    this.timePost= new Date()
  }
}
