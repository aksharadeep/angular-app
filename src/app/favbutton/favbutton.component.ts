import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favbutton',
  templateUrl: './favbutton.component.html',
  styleUrls: ['./favbutton.component.css']
})
export class FavbuttonComponent implements OnInit {
@Input() public response;
  info: any;
  constructor() { }

  ngOnInit() {
  }

}
