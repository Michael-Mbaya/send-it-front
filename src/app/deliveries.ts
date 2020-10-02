export class Deliveries {
    constructor(
        public id:number,
        public item:string,
        public quantity:number,
        public price:number,
        public destination:String,
        public dispatch_time:Date,
        public delivery_time:Date
    ){}
}