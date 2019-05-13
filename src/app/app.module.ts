import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatTabsModule, MatSelectModule, MatRadioModule, MatDividerModule, MatExpansionModule,
  MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SingleDirectionSelectorComponent } from './single-direction/single-direction-selector.component';
import { SingleDirectionTimetableComponent } from './single-direction/single-direction-timetable.component';
import { SingleDirectionTimetableSectionComponent } from './single-direction/single-direction-timetable-section.component';
import { TimetableService } from './shared/timetable.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestangularModule } from 'ngx-restangular';
import { LineStationSelectorComponent } from './station-selector/line-station-selector.component';
import { StationTimetableForInterchangeComponent } from './station-timetable/station-timetable-for-interchange.component';
import { TrainTimetableComponent } from './train-timetable/train-timetable.component';

const baseUrl = 'http://www.quillblue.com/shmetro-api';

// Function for setting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl(baseUrl);
  // RestangularProvider.setDefaultHttpFields({ withCredentials: true });
}

@NgModule({
  declarations: [
    AppComponent,
    SingleDirectionSelectorComponent,
    SingleDirectionTimetableComponent,
    SingleDirectionTimetableSectionComponent,
    LineStationSelectorComponent,
    StationTimetableForInterchangeComponent,
    TrainTimetableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [StationTimetableForInterchangeComponent,
    TrainTimetableComponent],
  providers: [TimetableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
