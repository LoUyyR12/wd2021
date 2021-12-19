import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';


@Component({
  selector: 'news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.sass']
})
export class NewsSectionComponent implements OnInit {

  title = "News section";
  news;

  constructor(service: NewsService) { 
    this.news = service.getNews();
  }

  ngOnInit(): void {
  }

}
