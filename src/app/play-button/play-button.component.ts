import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
@Component({
  selector: 'app-playbutton',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.css']
})
export class PlaybuttonComponent implements OnInit {
  @Input() public link;
  constructor() { }
  ngOnInit() {
  }
  play() {
    window.open(this.link);
  }
}
