import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutModule } from '@angular/cdk/layout';
// import { responsive } from './responsive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ProfileComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
    // responsive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
