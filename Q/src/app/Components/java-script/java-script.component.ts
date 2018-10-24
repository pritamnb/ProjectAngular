import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.css']
})
export class JavaScriptComponent implements OnInit {
  isClicked: boolean;
  constructor() {
    this.isClicked = false;
  }

  ngOnInit() {
  }

  toggle() {
    this.isClicked = !this.isClicked;
  }


}