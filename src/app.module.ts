import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';
import { FileController } from './file/file.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule,TerminusModule,ConfigModule.forRoot()],
  controllers: [AppController, HealthController, FileController],
  providers: [AppService],
})
export class AppModule {}
