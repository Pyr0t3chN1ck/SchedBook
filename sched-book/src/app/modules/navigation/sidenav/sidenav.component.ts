import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() isFullMenu: boolean;
  navigationOptions = [
    { title: 'Booking', icon: 'event', url: 'booking'},
    { title: 'Calendar', icon: 'calendar_today', url: 'calendar'},
    { title: 'Client', icon: 'groups', url: 'clients'},
    { title: 'Configuration', icon: 'settings', url: 'configuration'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
