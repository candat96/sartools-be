import { Module } from '@nestjs/common';
import { ErrorNotificationBotModule } from './error-notification-bot/error-notification-bot.module';

@Module({
  imports: [ErrorNotificationBotModule],
  exports: [ErrorNotificationBotModule],
})
export class TelegramBotModule {}
