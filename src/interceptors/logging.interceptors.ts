import { CallHandler, ExecutionContext, Logger, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

export class LoggingInterceptor implements NestInterceptor {
    logger = new Logger(LoggingInterceptor.name)
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        // NOTICE: GLOBAL INTERCEPTOR
        this.logger.warn('===TRIGGER GLOBAL INTERCEPTOR (PRE)===')
        const now = Date.now()
        return next.handle().pipe(
            tap(() => {
                // NOTICE: GLOBAL INTERCEPTOR
                this.logger.warn('===TRIGGER GLOBAL INTERCEPTOR (POST)===')
                this.logger.log(`After...${Date.now() - now}ms`)
            })
        )
    }
}