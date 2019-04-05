export class TimeFormatUtil {
    public static getTimeDisplay(time: number) {
        const seconds = time % 100;
        time = Math.trunc(time / 100);
        const minutes = time % 100;
        const hours = Math.trunc(time / 100);
        const hoursDisplay = hours < 10 ? '0' + hours.toString() : hours;
        const minutesDisplay = minutes < 10 ? '0' + minutes.toString() : minutes;
        const secondsDisplay = seconds < 10 ? '0' + seconds.toString() : seconds;
        return hoursDisplay + ':' + minutesDisplay + ':' + secondsDisplay;
    }
}
