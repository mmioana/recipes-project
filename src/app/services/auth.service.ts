import {HttpClient} from "@angular/common/http";
import * as firebase from 'firebase';
import {Observable} from "rxjs/Observable";
import {delay} from "rxjs/operator/delay";

export class AuthService {
  tokenId = '';
  isLoggedIn = false;

  constructor() {}

  createUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);
      });
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then((response) => {
        firebase.auth().currentUser.getIdToken()
          .then((token) => {
            this.tokenId = token;
            this.isLoggedIn = true;
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  signOutUser() {
    firebase.auth().signOut();
    this.isLoggedIn = false;
  }

  getToken() {
    const currentUser = firebase.auth().currentUser;
    if(currentUser) {
      currentUser.getIdToken()
        .then((token) => this.tokenId = token);
    }
    return this.tokenId;
  }

  getCurrentUserEmail() {
    return Observable.of(firebase.auth().currentUser).map((user) => {
      if (this.isLoggedIn !== null) {
        return user.email;
      }
      return null;
    });
  }

  isAuthenticated(): Observable<boolean> {
    return Observable.of(this.isLoggedIn).delay(1000);
  }
}
