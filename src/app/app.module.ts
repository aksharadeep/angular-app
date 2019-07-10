import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './test.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonComponent } from './button/button.component';
import { PlaybuttonComponent } from './play-button/play-button.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    CardComponent,
    SidebarComponent,
    ButtonComponent,
    PlaybuttonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
