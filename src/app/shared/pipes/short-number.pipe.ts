import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(value: number, decimalPlaces: number = 0): string {

    const suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];
    const limit = 1000;

    if (Number.isNaN(value)) {
      return '';
    }

    if (value < limit) {
      return value.toString();
    }

    const exponential = Math.floor(Math.log(value) / Math.log(limit));
    const long = value / Math.pow(limit, exponential);
    const short = long.toFixed(decimalPlaces);
    const suffix = suffixes[exponential - 1];

    return short + suffix;
  }

}
