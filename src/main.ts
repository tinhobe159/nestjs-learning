import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const logger = new Logger(bootstrap.name)
  const app = await NestFactory.create(AppModule);
  // Global Middleware
  app.use(helmet())
  app.use((req: Request, res: Response, next) => {
    logger.debug('===TRIGGER GLOBAL MIDDLEWARE===')
    next()
  })
  await app.listen(3300);
}
bootstrap();
