import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './sections/shared/header/header.component';
import { BannerComponent } from './sections/banner/banner.component';
import { EducationComponent } from './sections/home/education/education.component';
import {MatCardModule} from '@angular/material/card';
import { ExperienceComponent } from './sections/home/experience/experience.component';
import { ContactComponent } from './sections/home/contact/contact.component';
import { FooterComponent } from './sections/shared/footer/footer.component';
import { CareerComponent } from './pages/career/career.component';
import { CareerGoalsComponent } from './sections/career/career-banner/career-goals.component';
import { HttpClientModule } from '@angular/common/http';
import { CareerInputsComponent } from './sections/career/career-inputs/career-inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    CareerComponent,
    CareerGoalsComponent,
    CareerInputsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    FontAwesomeModule,
    NgbModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
