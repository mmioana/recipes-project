import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formGrp = new FormGroup({
    'user-data': new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], [this.emailAlreadyInUse]),
      'password': new FormControl(null,[Validators.required])
    })
  });

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  emailAlreadyInUse(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value.startsWith('ioana')) {
          resolve({'used': true});
        }
        resolve(null);
      }, 2000);
    });

    return promise;
  }

  onSubmit() {
    console.log(this.formGrp.value);
    const email = this.formGrp.value['user-data'].email;
    const password = this.formGrp.value['user-data'].password;
    this.authService.signInUser(email, password);

    setTimeout(() => this.router.navigate(['/recipes']), 2500)
  }

}
