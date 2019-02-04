import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() barToggle = new EventEmitter<boolean>();
  @Input() person;
  bar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onOpen() {
    this.bar = !this.bar;
    this.barToggle.emit(this.bar);
  }

}
