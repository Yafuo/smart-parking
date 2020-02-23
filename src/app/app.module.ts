import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";
import {TopPanelComponent} from "./common/top-panel/top-panel.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {EventBusService} from "./common/service/event-bus.service";
import {CookieService} from "./cookie.service";
import {ModalModule, PaginationModule} from "ngx-bootstrap";
import {LogComponent} from "./home/log/log.component";
import {FormsModule} from "@angular/forms";
import {StationComponent} from "./home/station/station.component";

@NgModule({
  declarations: [
    AppComponent,
    TopPanelComponent,
    LogComponent,
    StationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [AuthGuard, AuthService, CookieService, EventBusService],
  bootstrap: [AppComponent],
  entryComponents: [LogComponent, StationComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
