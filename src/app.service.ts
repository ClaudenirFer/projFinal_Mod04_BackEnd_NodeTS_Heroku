import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Insira a palavra games no final da url e dê enter... Ou faça o login.';
  }
}
