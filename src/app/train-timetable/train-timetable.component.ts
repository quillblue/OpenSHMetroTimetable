import { Component, OnInit, Inject } from "@angular/core";
import { TimetableService } from "../shared/timetable.service";
import { TimeFormatUtil } from "../shared/util/time-format-util";
import { StationTimeTable } from "../shared/models/station-timetable";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-train-timetable",
  templateUrl: "./train-timetable.component.html",
  styleUrls: ["./train-timetable.component.scss"],
})
export class TrainTimetableComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public criteria: StationTimeTable,
    private timetableService: TimetableService
  ) {}

  timetable: StationTimeTable[];

  ngOnInit() {
    console.log(this.criteria);
    this.timetableService
      .getSingleTrainTimetable(this.criteria)
      .subscribe((result) => {
        this.timetable = result;
      });
  }
}
