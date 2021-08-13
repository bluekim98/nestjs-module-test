import { Injectable } from '@nestjs/common';

@Injectable()
export class PlaylistService {
  async sayHello(): Promise<string> {
    return 'Hello !';
  }
}
