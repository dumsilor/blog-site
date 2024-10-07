import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'truncate',
    standalone: true
})

export class TruncatePipe implements PipeTransform {
    transform(value: string, limit=50, ellipsis: string = '...') {
        if (value.length <= 50 ) {
            return value;
        }
        return value.substring(0, limit) + ellipsis;
    }
}