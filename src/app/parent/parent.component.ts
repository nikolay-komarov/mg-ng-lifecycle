import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

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

  @ViewChild('divContainer')
  divContainer?: ElementRef<HTMLDivElement>;

  @ViewChild(ChildComponent) appChild?: ChildComponent;

  constructor(private cdr: ChangeDetectorRef) {
    console.log('# Parent: constructor ', this.title, this.divContainer);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('# Parent ngOnChanges: ', changes);
  }
  ngOnInit(): void {
    console.log('# Parent ngOnInit ', this.title, this.divContainer);
  }
  ngAfterViewChecked(): void {
    console.log('# Parent ngAfterViewChecked ', this.title, this.divContainer);
  }
  ngAfterViewInit(): void {
    console.log('# Parent ngAfterViewInit ', this.title, this.divContainer);

    this.appChild.title = 'FOOO';
    this.cdr.detectChanges();

    // Promise.resolve().then(() => (this.appChild.title = 'FOOO'));
  }
  ngAfterContentChecked(): void {
    console.log(
      '# Parent ngAfterContentChecked ',
      this.title,
      this.divContainer
    );
  }
  ngAfterContentInit(): void {
    console.log('# Parent ngAfterContentInit ', this.title, this.divContainer);
  }
  ngDoCheck(): void {
    console.log('# Parent ngDoCheck ', this.title, this.divContainer);
  }
  ngOnDestroy(): void {
    console.log('# Parent ngOnDestroy ', this.title, this.divContainer);
  }
}
