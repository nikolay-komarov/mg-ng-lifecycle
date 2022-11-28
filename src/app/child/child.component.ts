import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
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
  @Input() title = 'before init child';

  constructor() {
    // console.log('# Child: constructor ', this.title);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('# Child ngOnChanges: ', changes);
  }
  ngOnInit(): void {
    // console.log('# Child ngOnInit ', this.title);
  }
  ngAfterViewChecked(): void {
    // console.log('# Child ngAfterViewChecked ', this.title);
  }
  ngAfterViewInit(): void {
    // console.log('# Child ngAfterViewInit ', this.title);
  }
  ngAfterContentChecked(): void {
    // console.log('# Child ngAfterContentChecked ', this.title);
  }
  ngAfterContentInit(): void {
    // console.log('# Child ngAfterContentInit ', this.title);
  }
  ngDoCheck(): void {
    console.log('# Child ngDoCheck ', this.title);
  }
  ngOnDestroy(): void {
    // console.log('# Child ngOnDestroy ', this.title);
  }
}
