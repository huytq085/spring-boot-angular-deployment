import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User();

  constructor(
    private router: Router,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  createUser() {
    this.userService.createUser(this.user)
      .subscribe(data => {
        alert("User created successfully.");
        this.location.back();
      })
  }

}
