import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './module/auth/login/login.component';
import { AuthpageComponent } from './module/auth/authpage/authpage.component';
import { RegisterComponent } from './module/auth/register/register.component';
import { HomeComponent } from './module/home/home.component';
import { VideosComponent } from './module/videos/videos.component';
import { UserscommentsComponent } from './module/userscomments/userscomments.component';
import { MsgComponent } from './module/admin/msg/msg.component';
import { ViewallmsgComponent } from './module/admin/viewallmsg/viewallmsg.component';
import { UsefullinksComponent } from './module/usefullinks/usefullinks.component';


const routes: Routes = [
  { path: '', component: AuthpageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'usercomments', component: UserscommentsComponent },
  { path: 'adminMsg', component: MsgComponent, children: [
    { path: 'view-allMsg', component: ViewallmsgComponent }
  ]},
  { path: 'usefullinks', component: UsefullinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
