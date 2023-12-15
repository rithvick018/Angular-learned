import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './auth/components/register-user/register-user.component';
import { LoginUserComponent } from './auth/components/login-user/login-user.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { NavBarComponent } from './common/components/nav-bar/nav-bar.component';
import { HomePageComponent } from './main/home-page/home-page.component';
import { AboutPageComponent } from './main/about-page/about-page.component';
import { ContactUsComponent } from './main/contact-us/contact-us.component';
import { AnimationComponent } from './common/components/animation/animation.component';
import { TicketBookingComponent } from './main/ticket-booking/ticket-booking.component';
import { AuthGuard } from './auth/service/auth.guard';
import { AccessGuard } from './auth/service/access.guard';
import { DeactivateGuard } from './main/service/deactivate.guard';
import { GardeningComponent } from './theme/gardening/gardening.component';
import { GardenTeamComponent } from './theme/garden-team/garden-team.component';
import { GardenAboutusComponent } from './theme/garden-aboutus/garden-aboutus.component';
import { GardenContactComponent } from './theme/garden-contact/garden-contact.component';
import { ScrollComponent } from './scroll/scroll.component';
import { RetailHomeTopCategoryComponent } from './theme/retail-home-top-category/retail-home-top-category.component';
import { RetailDesignComponent } from './theme/retail-design/retail-design.component';
import { RetailCardsComponent } from './theme/retail-cards/retail-cards.component';
import { RetailFollowInstaComponent } from './theme/retail-follow-insta/retail-follow-insta.component';
import { PracticeBannerComponent } from './theme/practice-banner/practice-banner.component';
import { ChartsComponent } from './theme/charts/charts.component';
import { UpsComponent } from './main/ups/ups.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'app',component:NavBarComponent,canActivate:[AuthGuard],canActivateChild:[AccessGuard],children:[
    {path:'',component:HomePageComponent},
    {path:'about',component:AboutPageComponent},
    {path:'contact',component:ContactUsComponent},
    {path:'ticketbooking',component:TicketBookingComponent,canDeactivate:[DeactivateGuard]},
  ]},
  {path:'ticketbooking',component:TicketBookingComponent},
  {path:'animation',component:AnimationComponent},
  {path:'login',component:LoginUserComponent},
  {path:'signup',component:RegisterUserComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'garden',component:GardeningComponent},
  {path:'garden-team',component:GardenTeamComponent},
  {path:'garden-aboutus',component:GardenAboutusComponent},
  {path:'garden-contactus',component:GardenContactComponent},
  {path: 'scroll', component: ScrollComponent},
  {path: 'retail-top-category', component: RetailHomeTopCategoryComponent},
  {path: 'retail-top', component: RetailDesignComponent},
  {path: 'retail-card', component: RetailCardsComponent},
  {path: 'retail-follow', component: RetailFollowInstaComponent},
  {path: 'theme-practice', component: PracticeBannerComponent},
  {path: 'chart', component: ChartsComponent},
  {path: 'ups', component: UpsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
