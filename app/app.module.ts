import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { PiesListComponent } from './pies-list.component';



@NgModule({
  imports: [BrowserModule,
            FormsModule],
  declarations: [ AppComponent,
                  PiesListComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
