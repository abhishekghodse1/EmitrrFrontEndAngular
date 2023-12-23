export class TimeStamps {
    id:number;
    score:number;
    timestamp:Date;
    username:String;
    

    constructor(id: number = 0, score: number = 0, timestamp: Date = new Date(),username :String) {
        this.id = id;
        this.score = score;
        this.timestamp = timestamp;
        this.username=username;
      }
}
