import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.sass']
})
export class HeroSectionComponent implements OnInit {
  title = "Hero section";
  constructor() { }

  ngOnInit(): void {
  }

}
