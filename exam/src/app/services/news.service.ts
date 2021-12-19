import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews(){
    return ["First piece of news", "Second piece of news", "Third piece of news"];
  }
}
