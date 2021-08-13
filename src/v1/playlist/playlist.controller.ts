import { Controller, Get } from '@nestjs/common';
import { PlaylistService } from '../../core/playlist/service/playlist.service';

@Controller('v1.2')
export class PlaylistController {
  constructor(private playlistService: PlaylistService) {}

  @Get('/hello')
  async sayHello(): Promise<string> {
    return await this.playlistService.sayHello();
  }
}
