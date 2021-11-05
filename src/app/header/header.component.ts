import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  title = 'Todo App';
  subtitle = 'My first Angular application';
  bgColor = '#eee';
  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
