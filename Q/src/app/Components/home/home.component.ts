import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSignup: boolean;
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:no-var-keyword
    // tslint:disable-next-line:prefer-const
    // var global = global || window;
    // var Buffer = Buffer || [];
    // var process = process || {
    //   env: { DEBUG: undefined },
    //   version: []
    // };
  }

}
