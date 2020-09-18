import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuButtonClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  menuButtonAction(): void {
    this.menuButtonClick.emit();
  }

}
