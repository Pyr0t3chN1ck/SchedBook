import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {

  @Input() displayedClient: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
