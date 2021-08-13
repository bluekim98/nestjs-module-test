import { Module } from '@nestjs/common';
import { PlaylistController } from 'src/core/playlist/playlist.controller';
import { PlaylistService } from './playlist.service';

@Module({
  controllers: [PlaylistController],
  providers: [PlaylistService],
  exports: [PlaylistService],
})
export class PlaylistModule {}
