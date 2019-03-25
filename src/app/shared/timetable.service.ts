import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';
import { StationTimeTable } from './models/station-timetable';
import { SingleDirectionTimetable } from './models/single-direction-timetable';

@Injectable()
export class TimetableService {

    private singleStation$ = this.restangular.all('single');

    constructor(private restangular: Restangular) {

    }

    getSingleStationTimetable(criteria: SingleDirectionTimetable): Observable<StationTimeTable[]> {
        return this.singleStation$.getList({
            line: criteria.lineId, fromStation: criteria.stationId,
            toStation: criteria.destStationId, live: criteria.isLive ? 1 : 0,
            diagramType: criteria.diagramType,
            diagramSpecified: criteria.diagramSpecified,
            direction: criteria.direction,
            travelTime: criteria.startTime.replace(':', '') + '00'
        });
    }
}
