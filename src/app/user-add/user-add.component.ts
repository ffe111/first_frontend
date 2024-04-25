import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Location, NgIf } from '@angular/common';
import { UserCreate } from '../user-create';


@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    HttpClientModule,
  ],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {

  constructor(private readonly userService: UserService, readonly location: Location) { }

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

  createUser() {
    if (this.userForm.invalid) {
      console.log('Please fill in all fields correctly')
      return;
    }
    this.userService.createUser(<UserCreate>{
      name: this.userForm.value.name,
      age: this.userForm.value.age,
    }).subscribe({
      next: () => {
        console.log('User created');
        this.goBack();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}