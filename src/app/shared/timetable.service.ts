import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';
import { StationTimeTable } from './models/station-timetable';
import { SingleDirectionTimetable } from './models/single-direction-timetable';
import { StationTimetableCriteria } from './models/station-timetable-criteria';
import { InterchangeGuideAndTimetable } from './models/interchange-guide-and-timetable';

@Injectable()
export class TimetableService {

    private singleDirection$ = this.restangular.all('single');
    private singleTrainTimetable$ = this.restangular.all('train');
    private stationTimetable$ = this.restangular.all('station');


    constructor(private restangular: Restangular) {

    }

    getSingleStationTimetable(criteria: SingleDirectionTimetable): Observable<StationTimeTable[]> {
        return this.singleDirection$.getList({
            line: criteria.lineId, fromStation: criteria.stationId,
            toStation: criteria.destStationId, live: criteria.isLive ? 1 : 0,
            diagramType: criteria.diagramType,
            diagramSpecified: criteria.diagramSpecified,
            direction: criteria.direction,
            travelTime: criteria.startTime.replace(':', '') + '00'
        });
    }

    getSingleTrainTimetable(criteria: StationTimeTable): Observable<StationTimeTable[]> {
        return this.singleTrainTimetable$.getList({
            trainNo: criteria.trainNo,
            benchmarkStationId: criteria.fromStationId,
            benchmarkStationDept: criteria.fromDeparture,
            diagramSpecified: criteria.diagramNum
        });
    }

    getStationTimetable(criteria: StationTimetableCriteria): Observable<InterchangeGuideAndTimetable[]> {
        return this.stationTimetable$.getList({
            station: criteria.stationId,
            diagramType: criteria.diagramType,
            time: criteria.time
        });
    }
}
