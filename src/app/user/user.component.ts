import { Component, OnInit } from '@angular/core';
import { Users } from '../users'
import {UserApiService} from '../user-api.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = "Users Call"
  users:Users;


  constructor(private api:UserApiService) { }

  searchUser(){
    this.api.searchUsers().then(
      (success)=>{
        this.users=this.api.users;
        console.log(this.users);
      },
      (error)=>{
        console.log(error)
      }
    )
    

  }

  ngOnInit(): void {
    
    this.searchUser()

  }
  

}
