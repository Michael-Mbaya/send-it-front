import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deliveries } from './deliveries';



@Injectable({
  providedIn: 'root'
})

export class DeliveryApiService {
 
  delivery: Deliveries

  constructor(public http:HttpClient) { 
    this.delivery = new Deliveries(1,"hh",1,1,"h",new Date(),new Date());
  }
   
  searchUsers(){
    
    interface ApiResponse {
    id:number;
    item:string;
    quantity: number;
    price:number;
    destination:String;
    dispatch_time:Date,
    delivery_time:Date
    } 
    let searchPoint = "https://sendit-shembaya-api.herokuapp.com/deliveries"

    console.log("xxxxxxxxxxxxxxxxxxxxxxxxx")
    let promise = new Promise((resolve, reject) => {

      this.http.get<ApiResponse>(searchPoint).toPromise().then(
        (results) => {
          console.log("rrrrrrrrrrrrr")
          console.log(results);
          console.log("rrrrrrrrrrrrr")
          this.delivery = results;
       

          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    return promise;
  }


}