import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerData: any;
  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.getHeaderData();
  }

  getHeaderData() {
    this.headerService.getHeaderData().subscribe( (response) => {
      this.headerData = response;
      console.log(this.headerData);
    });
  }



}
