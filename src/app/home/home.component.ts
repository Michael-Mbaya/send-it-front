import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DeliveryApiService} from '../delivery-api.service'
import { observable } from 'rxjs';
import { Deliveries } from '../deliveries'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DeliveryApiService]
})
export class HomeComponent implements OnInit {

  title = "Deliveries Call"
  delivery:Deliveries


  constructor(private api:DeliveryApiService) { }

  searchUser(){
    this.api.searchUsers().then(
      (success)=>{
        this.delivery=this.api.delivery;
        console.log(this.delivery);
      },
      (error)=>{
        console.log(error)
      }
    )
    

  }

  ngOnInit(): void {
    
    // this.api.deliCall().subscribe((data)=>{
    //   console.log(data);
    // })

    // let response = this.http.get("https://sendit-shembaya-api.herokuapp.com/deliveries");
    // response.subscribe((data) => console.log(data))
    this.searchUser()

  }

  

}
