import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {MatSelectModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { CreateOwnComponent } from './create-own/create-own.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { CarouselComponent } from './carousel/carousel.component';
import { PizzaComponent } from './pizza/pizza.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutComponent } from './about/about.component';
import { AboutdashComponent } from './aboutdash/aboutdash.component';

var firebaseConfig = {
  apiKey: "AIzaSyAzaT_k91cLxPT8kfVffgY_E6BnHda9ztc",
  authDomain: "loginfirebase-b87bf.firebaseapp.com",
  databaseURL: "https://loginfirebase-b87bf.firebaseio.com",
  projectId: "loginfirebase-b87bf",
  storageBucket: "loginfirebase-b87bf.appspot.com",
  messagingSenderId: "431730523046"
};


const appRoutes : Routes = [
  {path: 'home', component: PizzasComponent},
    {path: 'home/:id', component: PizzaComponent},
  {path: 'create-your-own', component: CreateOwnComponent},
  {path: 'login-register',component:LoginRegisterComponent,children:[
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'about-dash', component: AboutdashComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    CreateOwnComponent,
    CarouselComponent,
    PizzaComponent,
    LoginComponent,
    RegisterComponent,
    LoginRegisterComponent,
    ReviewsComponent,
    AboutComponent,
    AboutdashComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
