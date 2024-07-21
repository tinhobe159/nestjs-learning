import { Module } from "@nestjs/common";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";

@Module({
    imports: [],
    providers: [OrderService,],
    controllers: [OrderController],
},)
export class OrderModule {
}
