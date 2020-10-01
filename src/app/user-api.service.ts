import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users'

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  users: Users

  constructor(public http:HttpClient) { 
    this.users = new Users(0,"","",0);
  }

  searchUsers(){
    
    interface ApiResponse {
    id:number;
    name:String;
    address:String;
    phone_number:number;
    } 

    let searchPoint = "https://sendit-shembaya-api.herokuapp.com/users"

    console.log("xxxxxxxxxxxxxxxxxxxxxxxxx")
    let promise = new Promise((resolve, reject) => {

      this.http.get<ApiResponse>(searchPoint).toPromise().then(
        (results) => {
          console.log("rrrrrrrrrrrrr")
          console.log(results);
          console.log("rrrrrrrrrrrrr")
          this.users = results;
       

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
