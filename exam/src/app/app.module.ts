import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { NewsService } from './services/news.service';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { NewsMedicineComponent } from './news-medicine/news-medicine.component';
import { NewsAiComponent } from './news-ai/news-ai.component';
import { NewsScienceComponent } from './news-science/news-science.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    NewsSectionComponent,
    ContactFormComponent,
    FooterComponent,
    NewsMedicineComponent,
    NewsAiComponent,
    NewsScienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HeroSectionComponent},
      {path: 'news/medicine', component: NewsMedicineComponent},
      {path: 'news/ai', component: NewsAiComponent},
      {path: 'news/science', component: NewsScienceComponent},
      {path: 'news', component: NewsSectionComponent},
      {path: 'forms', component: ContactFormComponent},
      {path: '**', component: HeroSectionComponent}
    ])
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
