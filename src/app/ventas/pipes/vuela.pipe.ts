import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

    transform(value: string): string {
        return (value) ? 'vuela': 'no vuela';
    }
    
}