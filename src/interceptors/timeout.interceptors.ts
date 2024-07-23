import { CallHandler, ExecutionContext, Logger, NestInterceptor, RequestTimeoutException } from "@nestjs/common";
import { catchError, Observable, tap, throwError, timeout, TimeoutError } from "rxjs";

export class TimeOutInterceptor implements NestInterceptor {
    logger = new Logger(TimeOutInterceptor.name);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        // NOTICE: CONTROLLER INTERCEPTOR
        this.logger.warn('===TRIGGER CONTROLLER INTERCEPTOR (PRE)===')
        return next.handle().pipe(
            tap(() => {
                // NOTICE: CONTROLLER INTERCEPTOR
                this.logger.warn('===TRIGGER CONTROLLER INTERCEPTOR (POST)===')
            }),
            timeout(5000),
            catchError((err) => {
                if (err instanceof TimeoutError) {
                    return throwError(() => new RequestTimeoutException())
                }
                return throwError(() => err)
            })
        )
    }
}