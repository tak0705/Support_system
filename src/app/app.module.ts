import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChinoComponent } from './kougaku/chino/chino.component';
import { DenkiComponent } from './kougaku/denki/denki.component';
import { KikaiComponent } from './kougaku/kikai/kikai.component';
import { SeimeiComponent } from './kougaku/seimei/seimei.component';
import { OukaComponent } from './kougaku/ouka/ouka.component';

@NgModule({
  declarations: [
    AppComponent,
    ChinoComponent,
    DenkiComponent,
    KikaiComponent,
    SeimeiComponent,
    OukaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
