import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
// import { HomeComponent } from './modules/home/pages/home/home.component';
// import { SearchComponent } from './modules/search/pages/search/search.component';
import { BlackBackgroundDirective } from './shared/directives/black-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    // HomeComponent,
    // SearchComponent,
    BlackBackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
