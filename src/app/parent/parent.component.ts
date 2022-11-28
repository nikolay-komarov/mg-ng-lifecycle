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

  constructor() {
    console.log('# Parent: constructor ', this.title);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('# Parent ngOnChanges: ', changes);
  }
  ngOnInit(): void {
    console.log('# Parent ngOnInit ', this.title);
  }
  ngAfterViewChecked(): void {
    console.log('# Parent ngAfterViewChecked ', this.title);
  }
  ngAfterViewInit(): void {
    console.log('# Parent ngAfterViewInit ', this.title);
  }
  ngAfterContentChecked(): void {
    console.log('# Parent ngAfterContentChecked ', this.title);
  }
  ngAfterContentInit(): void {
    console.log('# Parent ngAfterContentInit ', this.title);
  }
  ngDoCheck(): void {
    console.log('# Parent ngDoCheck ', this.title);
  }
  ngOnDestroy(): void {
    console.log('# Parent ngOnDestroy ', this.title);
  }
}
