import { Controller, Get, } from "@nestjs/common";

@Controller('order')
export class OrderController {
    @Get()
    findAll(): string {
        return 'Order called'
    }
}