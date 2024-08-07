import { Directive, ElementRef, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appAgeColor]',
  standalone: true,
})
export class AgeColorDirective implements OnChanges {
  @Input() appAgeColor: number | null = null;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.appAgeColor !== null) {
      if (this.appAgeColor >= 20 && this.appAgeColor <= 30) {
        this.el.nativeElement.style.color = 'green';
      } else {
        this.el.nativeElement.style.color = 'red';
      }
    }
  }
}
