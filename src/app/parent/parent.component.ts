import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { fromEvent, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  private _array = [];

  @Input() set array(values: number[]) {
    this._array = values;
    console.log('## Parent: set array ', this._array);
  }
  get array() {
    return this._array;
  }

  private lenght = this.array.length;

  constructor(private cdr: ChangeDetectorRef) {
    // console.log('# Parent: constructor ', this.title);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('# Parent ngOnChanges: ', changes);
  }
  ngOnInit(): void {
    // console.log('# Parent ngOnInit ', this.title);

    setTimeout(() => {
      this.title = 'foo';
      this.cdr.markForCheck();
    }, 1000);
  }
  ngAfterViewChecked(): void {
    // console.log('# Parent ngAfterViewChecked ', this.title);
  }
  ngAfterViewInit(): void {
    // console.log('# Parent ngAfterViewInit ', this.title);
  }
  ngAfterContentChecked(): void {
    // console.log('# Parent ngAfterContentChecked ', this.title);
  }
  ngAfterContentInit(): void {
    // console.log('# Parent ngAfterContentInit ', this.title);
  }
  ngDoCheck(): void {
    console.log('# Parent ngDoCheck ', this.title);

    if (this.lenght !== this.array.length) {
      console.log('has changes');
      this.cdr.markForCheck();
      this.lenght === this.array.length;
    }
  }
  ngOnDestroy(): void {
    // console.log('# Parent ngOnDestroy ', this.title);
  }
}
