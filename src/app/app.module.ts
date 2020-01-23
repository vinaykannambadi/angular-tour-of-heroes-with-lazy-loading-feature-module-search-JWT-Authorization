import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService} from './services/hero.service';
import { MessageService} from './services/message.service';
import {MessagesModule} from './messages/messages.module';
import { AuthService } from './services/auth.service';
import { FakeBackendInterceptor, JwtInterceptor } from './helper';





@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, MessagesModule,HttpClientModule],
  declarations: [ AppComponent, HelloComponent],
  bootstrap:    [ AppComponent ],
  providers: [HeroService, MessageService, AuthService,
  { provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true}, { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }]
})
export class AppModule { }
