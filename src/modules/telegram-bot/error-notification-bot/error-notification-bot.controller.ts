import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TelegramBotService } from '../telegram-bot.service';

@ApiTags('Telegram Bot')
@Controller('resource/telegramBot/errorNotificationBot')
export class ErrorNotificationBotController {
  constructor(private readonly telegramService: TelegramBotService) {}

  @Get()
  async test() {
    throw Error();
    // return await this.telegramService.test()
  }
}
