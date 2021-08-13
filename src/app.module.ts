import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { V1Module } from './v1/v1.module';

@Module({
  imports: [V1Module, CoreModule],
})
export class AppModule {}
