import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-medicine',
  templateUrl: './news-medicine.component.html',
  styleUrls: ['./news-medicine.component.sass']
})
export class NewsMedicineComponent implements OnInit {

  title = "Robots in medicine"

  constructor() { }

  ngOnInit(): void {
  }

}
