import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NgClass,
  NgFor,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Class48';
  names = [
    'Name 1',
    'Name 2',
    'Name 3',
    'Name 4',
    'Name 5',
    'Name 6',
    'Name 7',
    'Name 8',
    'Name 9',
    'Name 10',
  ];

  genderList = [
    'boy',
    'girl',
    'other',
    'boy',
    'girl',
    'other',
    'boy',
    'girl',
    'other',
    'boy',
  ];
}
