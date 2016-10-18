import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "prioritiness",
  pure: false
})
  export class PrioritinessPipe implements PipeTransform {
    transform(input: Task[], desiredPrioritiness) {
      var output: Task[] = [];
      if(desiredPrioritiness !== "Show All"){
        for (var i = 0; i < input.length; i++) {
          if (input[i].priority === desiredPrioritiness) {
            output.push(input[i]);
        }
      }
        return output;
      }
      else{
        return input;
      }
    }
  }
