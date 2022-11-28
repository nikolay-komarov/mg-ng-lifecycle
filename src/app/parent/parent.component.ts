import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() title = 'before init parent';

  @ContentChild('ref', { read: ChildComponent }) appChild?: ChildComponent;
  @ContentChildren('ref', { read: ChildComponent })
  appChildren?: QueryList<ChildComponent>;

  constructor() {
    console.log('# Parent: constructor ', this.title, this.appChild);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('# Parent ngOnChanges: ', changes, this.appChild);
  }
  ngOnInit(): void {
    console.log('# Parent ngOnInit ', this.title, this.appChild);
  }
  ngAfterViewChecked(): void {
    console.log('# Parent ngAfterViewChecked ', this.title, this.appChild);
  }
  ngAfterViewInit(): void {
    console.log('# Parent ngAfterViewInit ', this.title, this.appChild);

    this.appChild.sayHi();
    this.appChild.title = 'FOO';
  }
  ngAfterContentChecked(): void {
    console.log('# Parent ngAfterContentChecked ', this.title, this.appChild);
  }
  ngAfterContentInit(): void {
    console.log('# Parent ngAfterContentInit ', this.title, this.appChild);
  }
  ngDoCheck(): void {
    console.log('# Parent ngDoCheck ', this.title, this.appChild);
  }
  ngOnDestroy(): void {
    console.log('# Parent ngOnDestroy ', this.title, this.appChild);
  }
}
