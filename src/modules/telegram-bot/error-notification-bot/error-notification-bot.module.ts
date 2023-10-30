import { Module } from '@nestjs/common';
import { TelegramModule } from 'nestjs-telegram';
import { ErrorNotificationBotController } from './error-notification-bot.controller';
import { ErrorNotificationBotService } from './error-notification-bot.service';
import { TelegramBotService } from '../telegram-bot.service';

@Module({
  imports: [
    TelegramModule.forRoot({
      botKey: '6369895955:AAG9vPRZBaxQhBrDwj-v2bndoKDjdF_2Zn4',
    }),
  ],
  controllers: [ErrorNotificationBotController],
  providers: [TelegramBotService, ErrorNotificationBotService],
  exports: [ErrorNotificationBotService],
})
export class ErrorNotificationBotModule {}
