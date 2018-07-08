import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router,private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  
  users: User[];

  getUsers(){
    this.userService.getUsers()
        .subscribe(data => this.users = data)
  }

  deleteUser(user: User){
    this.userService.deleteUser(user)
        .subscribe(data => {
          this.users = this.users.filter(u => u !== user)
        });
  }


  

}
