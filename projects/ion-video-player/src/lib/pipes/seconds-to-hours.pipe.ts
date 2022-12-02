import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'secondsToHours'
})
export class SecondsToHoursPipe implements PipeTransform {

    transform(value: number): string {
        return new Date(value * 1000).toISOString().substring(11, 19);
    }

}