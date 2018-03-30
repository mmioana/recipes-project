import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ShoppingService} from "../services/shopping.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() isRestricted = new EventEmitter<boolean>();

  cartItemsObservable: Observable<number>;

  constructor(public authService: AuthService,
              public shoppingService: ShoppingService) { }

  ngOnInit() {
    this.cartItemsObservable = this.shoppingService.getSubject();
  }

  onCheckRestricted() {
    this.isRestricted.emit(!this.authService.isLoggedIn);
  }

}
