import { Body, Controller, Get, Logger, UseGuards, UseInterceptors, UsePipes, } from "@nestjs/common";
import { JwtAuthorizationGuard } from "src/guards/jwt-auth.guard";
import { OwnerShipGuard } from "src/guards/owner-ship.guard";
import { ExcludedNullInterceptor } from "src/interceptors/excluded-null.interceptors";
import { TimeOutInterceptor } from "src/interceptors/timeout.interceptors";
import { ParseControllerValidationPipe } from "src/pipe/parse-custom-controller-validation.pipe";
import { ParseRouteValidationPipe } from "src/pipe/parse-custom-route-validation.pipe";
import { OrderService } from "./order.service";

@UseGuards(JwtAuthorizationGuard)
@Controller('order')
@UseInterceptors(TimeOutInterceptor)
@UsePipes(ParseControllerValidationPipe)
export class OrderController {
    private logger: Logger;
    constructor(
        private orderService: OrderService
    ) {
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