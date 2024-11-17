import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerCount',
  standalone: true
})
export class TimerCountPipe implements PipeTransform {

  transform(value: number) {
    return this.secondsToTime(value)
  }

  secondsToTime(seconds: number) {    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    const hoursFormatted = hours.toString()
    const minutesFormatted = minutes.toString()
    const secondsFormatted = secs.toString()

    let formattedTime = `${secondsFormatted} Seconds`

    if (minutes !== 0) {
      formattedTime = `${minutesFormatted} Minutes ${secondsFormatted} Seconds`
    }
  
    // Format as HH:MM:SS
    return formattedTime;
  }

}
