import { BadRequestException, Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class VersionMiddleWare implements NestMiddleware {
    logger = new Logger(VersionMiddleWare.name);
    use(req: Request, res: Response, next: NextFunction) {
        // Module bound middleware
        this.logger.debug('===TRIGER MODULE BOUND MIDDLEWARE===');
        const appVersion = req.headers['x-app-version'];
        if (!appVersion || appVersion !== '2.0.0')
            throw new BadRequestException('Invalid app version')
        next();
    }
}