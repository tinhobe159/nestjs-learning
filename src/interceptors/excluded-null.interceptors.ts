import { CallHandler, ExecutionContext, Logger, NestInterceptor } from "@nestjs/common";
import { map, Observable, tap } from "rxjs";

export class ExcludedNullInterceptor implements NestInterceptor {
    logger = new Logger(ExcludedNullInterceptor.name);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        // NOTICE: ROUTE INTERCEPTOR
        this.logger.warn('===ROUTE INTERCEPTOR (PRE)===')
        return next.handle().pipe(
            map((value) => (value === null ? '' : value)),
            tap(() => {
                // NOTICE: ROUTE INTERCEPTOR
                this.logger.warn('===ROUTE INTERCEPTOR (POST)===')
            })
        )
    }
}