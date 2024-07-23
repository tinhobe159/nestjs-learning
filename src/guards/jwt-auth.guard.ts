import { CanActivate, ExecutionContext, Logger } from "@nestjs/common";
import { Observable } from "rxjs";

export class JwtAuthorizationGuard implements CanActivate {
    logger = new Logger(JwtAuthorizationGuard.name)
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // NOTICE: CONTROLLER GUARD
        this.logger.log('===TRIGGER CONTROLLER GUARD===')
        // IMPLEMENT LOGIC HERE
        return true
    }

}