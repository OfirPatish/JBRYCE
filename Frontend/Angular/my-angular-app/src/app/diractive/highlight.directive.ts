import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  constructor(private ElementRef: ElementRef) {}
  ngOnInit(): void {
    this.ElementRef.nativeElement.style.backgroundColor = 'green';
    this.ElementRef.nativeElement.style.color = 'white';
  }
}
