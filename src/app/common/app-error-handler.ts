import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
handleError(error:Response){
    //alert('unexpected error occurred' + error.status);
    console.log(error);
}
}