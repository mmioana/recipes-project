import {Component, Input, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  restrictedAccess = false;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBuWvzStMEEK8XuOadt7u_M25MSyIpuH9Y",
      authDomain: "recipes-proj.firebaseapp.com"
    });
  }

  onSetRestriction(value: boolean) {
    this.restrictedAccess = value;
  }
}
