import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { Location, NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserCreate } from '../user-create';
import {User} from "../user";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  @Input() id!: string;
  userDetail!: User

  constructor(private readonly userService: UserService, readonly location: Location) { }

  ngOnInit(): void {
    this.getUserDetail();
  }

  getUserDetail() {
    this.userService.getUserById(this.id).subscribe({
      next: (data: any) => {
        this.userDetail = data as User;
        this.userForm.patchValue({
          name: this.userDetail.name,
          age: this.userDetail.age,
        })
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  goBack() {
    this.location.back();
  }

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
    age: new FormControl(0, [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^[0-9]{1,3}$')]),
  })

  get name() {
    return this.userForm.get('name');
  }

  get age() {
    return this.userForm.get('age');
  }

  editUser() {
    if (this.userForm.invalid) {
      console.log('Please fill in all fields correctly')
      return;
    }
    this.userService.updateUser(this.userDetail._id, <UserCreate>{
      name: this.userForm.value.name,
      age: this.userForm.value.age,
    }).subscribe({
      next: () => {
        console.log(`User ${this.userDetail._id} update`);
        this.goBack();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
