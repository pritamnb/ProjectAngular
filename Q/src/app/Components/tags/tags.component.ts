import { Component, OnInit } from '@angular/core';
import { TagsService } from '../services/tags.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tagsData: any;
  constructor(private tagsService: TagsService, private router: Router) { }

  ngOnInit() {
    this.getTagsData();
  }

  getTagsData() {
    this.tagsService.getTagData().subscribe((response) => {
      this.tagsData = response;
      console.log(this.tagsData);

    });
  }

  goTo(id) {
    console.log(id);
    this.router.navigate([id]);
  }

}
