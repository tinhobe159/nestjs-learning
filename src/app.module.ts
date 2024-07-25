import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VersionMiddleWare } from './middlewares/version.middleware';
import { OrderModule } from './modules/order/order.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { CustomThrottlerGuard } from './guards/throttler.guard';

@Module({
  imports: [
    // Just add method forRoot props for fun. Use decorator for each module. Don't know why?
    ThrottlerModule.forRoot([{
      ttl: 6000,
      limit: 3,
    }]),
    OrderModule,],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD, // Bind this guard globally
      useClass: CustomThrottlerGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VersionMiddleWare).forRoutes('order')
  }
}
