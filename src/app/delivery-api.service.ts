import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deliveries } from './deliveries'


@Injectable({
  providedIn: 'root'
})

export class DeliveryApiService {
 delivery: Deliveries
  // constructor(
  //   private http:HttpClient
  // ) { }

  //   deliCall(){
  //     return this.http.get('https://sendit-shembaya-api.herokuapp.com/deliveries');
      
  //   }

  constructor(public http:HttpClient) { 
    this.delivery = new Deliveries(0,'',0);
  }

  searchUsers(){
    
    interface ApiResponse {
    id:number;
    name:string;
    phone_number: number;
    } 
    let searchPoint = "https://sendit-shembaya-api.herokuapp.com/users."

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