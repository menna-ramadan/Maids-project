import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  @Input() taps: any[] = [];
  @Input() activeTap: number = 1;
  @Output() tapChanged: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
