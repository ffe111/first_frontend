import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[] = []

  constructor(readonly userService: UserService) {
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res as User[];
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  consoleUserId(id: string) {
    console.log(id);
    alert(`Account id is ${id}`);
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        console.log(`user ${id} deleted successfully`);
        this.getAllUsers();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnInit() : void{
    this.getAllUsers();
  }
}
