import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './module/auth/login/login.component';
import { environment } from 'src/environments/environment';
import { AuthpageComponent } from './module/auth/authpage/authpage.component';
import { RegisterComponent } from './module/auth/register/register.component';
import { HomeComponent } from './module/home/home.component';
import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { PopupmodelComponent } from './module/popupmodel/popupmodel.component';
import { HeaderComponent } from './shared/header/header.component';
import { VideosComponent } from './module/videos/videos.component';
import { UserscommentsComponent } from './module/userscomments/userscomments.component';
import { MsgComponent } from './module/admin/msg/msg.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupmodelComponent,
    LoginComponent,
    RegisterComponent,
    AuthpageComponent,
    HomeComponent,
    HeaderComponent,
    VideosComponent,
    UserscommentsComponent,
    MsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
