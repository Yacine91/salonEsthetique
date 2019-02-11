import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrestationComponent } from './prestation/prestation.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ContactComponent } from './contact/contact.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import {HttpModule} from '@angular/http';

const routes = [
  {path: 'home', component: HomeComponent},
  {path: 'prestation', component: PrestationComponent},
  {path: 'pictures', component: PicturesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'rendez-vous',component:RendezVousComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrestationComponent,
    PicturesComponent,
    ContactComponent,
    RendezVousComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
