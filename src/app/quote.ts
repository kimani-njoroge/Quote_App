export class Quote {
  constructor(public id:number,public quoteDisplay:string,public author:string,public submittedBy:string, public upvote:number, public downvote:number){
    this.upvote= 0;
    this.downvote = 0;
  }
}
