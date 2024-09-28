import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private usersDataService: UsersDataService) {}

  ngOnInit(): void {
    this.usersDataService.fetchUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
