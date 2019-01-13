import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

users : Person[];

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("list"));
  }
  deleteUser(user: Person):void{
   var newUsers =[];
    this.users.forEach(u=>{
      if(u.name==user.name && u.address==user.address && u.country==user.country && u.pinCode==user.pinCode && u.city==user.city)
      {}
      else{
        newUsers.push(u);
      }
    })
    localStorage.setItem("list", JSON.stringify(newUsers));
    this.users = newUsers;
  }
  editUser(user: Person):void{

    // var newUsers =[];
  //   this.users.forEach(u=>{
  //     if(u.name==user.name && u.address==user.address && u.country==user.country && u.pinCode==user.pinCode && u.city==user.city)
  //     {}
  //     else{
  //       newUsers.push(u);
  //     }
  //   })
  //   localStorage.setItem("list", JSON.stringify(newUsers));
  //   this.users = newUsers;

  }

  readUser(user: Person):void{
    alert("Name: " + user.name + "\n"  + " Address: " + user.address + "\n" + " City: " + user.city+ "\n"  + " Pin Code: " + user.pinCode+ "\n"  + " Country: " + user.country);
  }



}
