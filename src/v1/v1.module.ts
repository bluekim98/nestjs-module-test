import { Module } from '@nestjs/common';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
  imports: [PlaylistModule],
  exports: [PlaylistModule],
})
export class V1Module {}
