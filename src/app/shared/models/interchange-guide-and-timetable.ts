import { StationTimeTable } from './station-timetable';

export class InterchangeGuideAndTimetable {
    lineId: number;
    interchangeGuide: string;
    interchangeTimePeak: number;
    interchangeTimeNormal: number;
    trains: StationTimeTable[][];
    directionInfo: any[];
}
