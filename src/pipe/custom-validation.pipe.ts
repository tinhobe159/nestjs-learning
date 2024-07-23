import { ArgumentMetadata, Logger, ValidationPipe } from "@nestjs/common";

export class CustomValidationPipe extends ValidationPipe {
    logger: Logger;
    constructor() {
        super();
        this.logger = new Logger(CustomValidationPipe.name)
    }
    transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        this.logger.debug('===TRIGGER GLOBAL PIPE===')
        return value
    }
}