import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<p>Hello World! <a href="/users">Users</a></p>';
  }
}
