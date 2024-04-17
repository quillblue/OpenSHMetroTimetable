import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { SingleDirectionSelectorComponent } from './single-direction/single-direction-selector.component';
import { SingleDirectionTimetableComponent } from './single-direction/single-direction-timetable.component';
import { SingleDirectionTimetableSectionComponent } from './single-direction/single-direction-timetable-section.component';
import { TimetableService } from './shared/timetable.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LineStationSelectorComponent } from './station-selector/line-station-selector.component';
import { StationTimetableForInterchangeComponent } from './station-timetable/station-timetable-for-interchange.component';
import { TrainTimetableComponent } from './train-timetable/train-timetable.component';

const baseUrl = 'http://www.quillblue.com/shmetro-api';



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
  providers: [TimetableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
