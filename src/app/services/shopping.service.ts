import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

export class ShoppingService {
  shoppingCartObservable= new Subject<number>();

  getSubject(): Observable<number> {
    return this.shoppingCartObservable.startWith(0).map((value) => {
      if (value >= 0) {
        return value;
      }
      return 0;
    });
  }


  generateValue(value: number) {
    this.shoppingCartObservable.next(value);
  }

}
