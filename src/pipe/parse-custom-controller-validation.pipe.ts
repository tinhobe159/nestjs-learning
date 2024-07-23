import { ArgumentMetadata, Logger, PipeTransform } from "@nestjs/common";

export class ParseControllerValidationPipe implements PipeTransform<string> {
    logger = new Logger(ParseControllerValidationPipe.name);
    transform(value: string, metadata: ArgumentMetadata) {
        // NOTICE: CONTROLLER PIPE
        this.logger.verbose('===TRIGGER CONTROLLER PIPE===')
        return value
    }
}