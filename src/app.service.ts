import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Insira o /games no final da url e dê enter para ver a lista';
  }
}
