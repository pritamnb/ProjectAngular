import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  tagsUrl: string;
  constructor(private http: HttpClient) {
    this.tagsUrl = '../../../assets/API/tags.json';
  }

  getTagData() {
    return this.http.get(this.tagsUrl);
  }
}
