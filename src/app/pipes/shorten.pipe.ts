import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
  transform(value: string, ...args: number[]): string {
    const maxLength = args[0];

    let trimmedString = value.substr(0, maxLength);
    return  trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + '...'

  }

}
