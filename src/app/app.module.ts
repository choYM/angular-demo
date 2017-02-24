import { MainNewProjectComponent3 } from './main-newproject3.component';
import { MainNewProjectComponent2 } from './main-newproject2.component';
import { MainNewProjectComponent1 } from './main-newproject1.component';
import { MainNewProjectComponent } from './main-newproject.component';
import { MainOverviewComponent } from './main-overview.component';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { TagInputModule } from 'ng2-tag-input';


const appRoutes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main/:user', component: MainComponent,
    children: [
      // { path: '', component: MainOverviewComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: MainOverviewComponent },
      { path: 'new-project', component: MainNewProjectComponent },
      { path: 'new-project1', component: MainNewProjectComponent1 },
      { path: 'new-project2', component: MainNewProjectComponent2 },
      { path: 'new-project3', component: MainNewProjectComponent3 }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MainOverviewComponent,
    MainNewProjectComponent, MainNewProjectComponent1, MainNewProjectComponent2, MainNewProjectComponent3
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TagInputModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
