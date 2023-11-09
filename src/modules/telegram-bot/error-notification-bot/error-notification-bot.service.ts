import { Injectable } from '@nestjs/common';
import { keys } from '../constants/keys';
import { TelegramBotService } from '../telegram-bot.service';

@Injectable()
export class ErrorNotificationBotService {
  constructor(private readonly telegram: TelegramBotService) {}

  async notiMessage(message: string) {
    try {
      return await this.telegram.sendMessage({
        chat_id: keys.CHAT_ID,
        text: message,
      });
    } catch (error) {
      throw error;
    }
  }
}
