import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatSnackBarModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { CommonDirectivesModule } from '../../directives/common/common-directives.module';
import { HomeRoutes } from './home.routing';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent} from './team/team.component';
import { WINDOW_PROVIDERS } from '../../helpers/window.helper';
import { HomeComponent } from './home.component';
import { TruncateModule } from 'ng2-truncate';
import { AboutComponent } from './about/about.component';
import { StrategyComponent } from './strategy/strategy.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    FlexLayoutModule,
    NguCarouselModule,
    CommonDirectivesModule,
    MatDialogModule,
    TruncateModule,
    RouterModule.forChild(HomeRoutes)
  ],


  declarations: [
    HomeComponent,
    HeaderComponent,
    IntroductionComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    TeamComponent,
    AboutComponent,
    AboutComponent,
    StrategyComponent
  ],
  providers: [WINDOW_PROVIDERS]

})
export class HomeModule { }
