import { Controller, Get } from '@nestjs/common';
import { PlaylistService } from './playlist.service';

@Controller('v2')
export class PlaylistController {
  constructor(private playlistService: PlaylistService) {}

  @Get('hello')
  async sayHello(): Promise<string> {
    return await this.playlistService.sayHello();
  }
}
