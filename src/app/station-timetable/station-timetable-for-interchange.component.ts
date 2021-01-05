import { Component, OnInit, Inject } from "@angular/core";
import { Constants } from "../shared/util/constants";
import { TimetableService } from "../shared/timetable.service";
import { StationTimetableCriteria } from "../shared/models/station-timetable-criteria";
import { InterchangeGuideAndTimetable } from "../shared/models/interchange-guide-and-timetable";
import { TimeFormatUtil } from "../shared/util/time-format-util";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-station-timetable-for-interchange",
  templateUrl: "./station-timetable-for-interchange.component.html",
  styleUrls: ["./station-timetable-for-interchange.component.scss"],
})
export class StationTimetableForInterchangeComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public criteria: StationTimetableCriteria,
    private timetableService: TimetableService
  ) {}

  timetableSections: InterchangeGuideAndTimetable[] = [];

  ngOnInit() {
    this.timetableService
      .getStationTimetable(this.criteria)
      .subscribe((result) => {
        this.timetableSections = result;
        this.timetableSections.forEach((item) => {
          item.directionInfo = Constants.LINE.find(
            (x) => x.lineId === item.lineId
          ).direction;
        });
        console.log(this.timetableSections);
      });
  }

  getInterchangeTimeDisplay(time: number) {
    if (time) {
      return (
        Math.trunc(time / 100) +
        ":" +
        (time % 100 < 10 ? (time % 100) + "0" : time % 100)
      );
    } else {
      return "";
    }
  }
}
