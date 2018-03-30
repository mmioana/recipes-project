import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  dishes = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onAddDish(dish: string) {
    this.dishes.push(dish);
  }

  onRemoveDish(dish: string) {
    this.dishes.splice(this.dishes.indexOf(dish), 1);
  }

  onSubmit(form: FormGroup) {
    console.log(form);
    const email = form.value['user-data'].email;
    const password = form.value['user-data'].password;
    this.authService.createUser(email, password);
  }

}
