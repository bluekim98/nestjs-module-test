import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { PlaylistController } from './playlist.controller';

@Module({
  controllers: [PlaylistController],
  imports: [CoreModule],
})
export class PlaylistModule {}
