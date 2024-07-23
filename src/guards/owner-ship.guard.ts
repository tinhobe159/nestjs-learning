import { CanActivate, ExecutionContext, Logger } from "@nestjs/common";
import { Observable } from "rxjs";

export class OwnerShipGuard implements CanActivate {
    logger = new Logger(OwnerShipGuard.name);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        this.logger.log('===TRIGGER ROUTE GUARD==');
        // IMPLEMENT QUERY ORDER AND USER
        return true
    }
}