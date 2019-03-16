import { Pipe, PipeTransform } from "@angular/core";

//adingb the decoration for the  the class
@Pipe({
    //under this name u can refer it in the html code
    name: "upper"
})
//implement is to show bthqat the caass implements pipe  transform 
export class UppercasePipe implements PipeTransform{
    //inside the transform function we will implment the tranfrom
    //this function will take argumenbts 'value' from the html code as string 
    //return type is also a string
    transform( value : string ) :  string {
        const transformedValue = value.toUpperCase();
        return transformedValue;

    }
}


