import { ArgumentMetadata, Logger, PipeTransform } from "@nestjs/common";

export class ParseRouteValidationPipe implements PipeTransform<string> {
    logger = new Logger(ParseRouteValidationPipe.name);
    transform(value: string, metadata: ArgumentMetadata) {
        // NOTICE: ROUTE PIPE
        this.logger.verbose('===TRIGGER ROUTE PIPE===')
        return value
    }
}