import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() FIO: string = "Введите ФИО специалиста";
  currentDate = new Date();
  currentTime = this.currentDate.getTime();// getMinutes();

  constructor() { }

  ngOnInit(): void {
  }

}
