import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TerminusModule } from '@nestjs/terminus';

import { MongooseModule } from '@nestjs/mongoose';
import { HealthController } from './health/health.controller';
import { FileController } from './file/file.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/dummy'),AuthModule,TerminusModule],
  controllers: [AppController, HealthController, FileController],
  providers: [AppService],
})
export class AppModule {}
