
import {
  Directive, DoCheck, EmbeddedViewRef, Input, IterableChanges, IterableDiffer, IterableDiffers, OnChanges,
  SimpleChanges, TemplateRef,
  ViewContainerRef, ViewRef
} from "@angular/core";

@Directive({
  selector: '[appFor][appForOf]'
})
export class ForOf<T> implements DoCheck, OnChanges {
  @Input() appForOf: Iterable<T>;
  constructor(private _templateRef: TemplateRef<ForOfContext<T>>,
              private _viewContainer: ViewContainerRef,
              private _differs: IterableDiffers) {}

  _differ: IterableDiffer<any>|null;

  ngOnChanges(changes: SimpleChanges) {
    if ('appForOf' in changes) {
      const newArray = changes['appForOf'].currentValue;
      if (newArray) {
        this._differ = this._differs.find(newArray).create();
      }
    }
  }

  ngDoCheck() {
    if (this._differ) {
      const changes = this._differ.diff(this.appForOf);
      if(changes) {
        this.applyChanges(changes);
      }
    }
  }

  applyChanges(changes: IterableChanges<T>) {
    const map = [];

    changes.forEachOperation((record, previousIndex, currentIndex) => {
      if(previousIndex === null) {
        const view = this._viewContainer.createEmbeddedView(this._templateRef, new ForOfContext<T>(null, this.appForOf, -1), currentIndex);
        map.push({'view': view, 'record': record});
      } else if(currentIndex === null) {
        this._viewContainer.remove(previousIndex);
      } else {
        const view: ViewRef = this._viewContainer.get(previousIndex);
        this._viewContainer.move(view, currentIndex);
        map.push({'view': view, 'record': record});
      }
    });

    map.forEach((tuple) => {
      tuple['view'].context.$implicit = tuple['record'].item;
    });

    for(let index = 0; index < this._viewContainer.length; index++) {
      const view = <EmbeddedViewRef<ForOfContext<T>>> this._viewContainer.get(index);
      view.context.index = index;
    }
    // for(const change in changes) {
    //   this._viewContainer.createEmbeddedView(this._templateRef, new ForOfContext<T>(null, this.appForOf, -1), );
    // }
  }
}


export class ForOfContext<T> {

  constructor(public $implicit: T, public appForOf: Iterable<T>, public index: number) {}
}
