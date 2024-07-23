import { Body, Controller, Get, Logger, UseGuards, UseInterceptors, UsePipes, } from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";
import { JwtAuthorizationGuard } from "src/guards/jwt-auth.guard";
import { OwnerShipGuard } from "src/guards/owner-ship.guard";
import { ExcludedNullInterceptor } from "src/interceptors/excluded-null.interceptors";
import { TimeOutInterceptor } from "src/interceptors/timeout.interceptors";
import { ParseControllerValidationPipe } from "src/pipe/parse-custom-controller-validation.pipe";
import { ParseRouteValidationPipe } from "src/pipe/parse-custom-route-validation.pipe";

@UseGuards(JwtAuthorizationGuard)
@Throttle({ default: { limit: 3, ttl: 60000 } })
@Controller('order')
@UseInterceptors(TimeOutInterceptor)
@UsePipes(ParseControllerValidationPipe)
export class OrderController {
    private logger: Logger;
    constructor() {
        this.logger = new Logger(OrderController.name);
    }
    @Get('find_all')
    findAll(): string {
        return 'Find all'
    }

    @Get('find_one')
    @UseGuards(OwnerShipGuard)
    @UsePipes(ParseRouteValidationPipe)
    @UseInterceptors(ExcludedNullInterceptor)
    async findOne(@Body() data: any): Promise<string> {
        this.logger.log(`Method name: ${this.findAll.name}`)
        return 'Find one'
    }
}