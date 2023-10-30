import { Injectable } from '@nestjs/common';
import {
  TelegramMessage,
  TelegramSendDocumentParams,
  TelegramSendMessageParams,
  TelegramService,
} from 'nestjs-telegram';

@Injectable()
export class TelegramBotService {
  constructor(private readonly telegram: TelegramService) {}

  async test(): Promise<any> {
    return this.telegram.getMe();
  }

  async sendMessage(data: TelegramSendMessageParams): Promise<TelegramMessage> {
    try {
      return this.telegram.sendMessage(data).toPromise();
    } catch (error) {
      console.log(error);
    }
  }

  async sendFile(data: TelegramSendDocumentParams): Promise<TelegramMessage> {
    try {
      return this.telegram.sendDocument(data).toPromise();
    } catch (error) {
      console.log(error);
    }
  }
}
