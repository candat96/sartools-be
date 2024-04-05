import { HttpStatus, Injectable } from "@nestjs/common";
import { Client } from 'node-mailjet';
import { Config } from "../../config/config";
import { ApiException } from "../exception/api-exception";
import { ErrorCode } from "../constants/error";
import { MailjetSendEmailRequest } from "./dto/request.dto";
import { Constant } from "../constants/constant";

const mailjetClient = Client.apiConnect(
  Config.MAILJET_PUBLIC_KEY,
  Config.MAILJET_PRIVATE_KEY
);

@Injectable()
export class MailjetService {
  buildResetPasswordEmailContent(toName: string, link: string) {
    return `
      Cher/Chère ${toName},

      Vous avez demandé une réinitialisation de votre mot de passe pour accéder à SarTools. Pour procéder à cette réinitialisation, veuillez suivre les étapes ci-dessous :

      1. Cliquez sur le lien suivant pour accéder à la page de réinitialisation de mot de passe :
      ${link}

      2. Une fois sur la page, suivez les instructions pour choisir un nouveau mot de passe sécurisé.

      Si vous n'avez pas demandé cette réinitialisation de mot de passe, veuillez ignorer ce message. Votre compte restera sécurisé.

      Nous vous remercions de votre attention et nous nous excusons pour tout inconvénient que cela pourrait vous causer.

      Cordialement,
      L'équipe Sartools
    `;
  }

  buildResetPasswordEmailHtmlTemplate(toName: string, link: string) {
    return `
      Cher/Chère ${toName},<br />

      Vous avez demandé une réinitialisation de votre mot de passe pour accéder à SarTools. Pour procéder à cette réinitialisation, veuillez suivre les étapes ci-dessous :<br />

      1. Cliquez sur le lien suivant pour accéder à la page de réinitialisation de mot de passe :<br />
      <a href=${link}>${link}</a><br />

      2. Une fois sur la page, suivez les instructions pour choisir un nouveau mot de passe sécurisé.<br />

      Si vous n'avez pas demandé cette réinitialisation de mot de passe, veuillez ignorer ce message. Votre compte restera sécurisé.<br />

      Nous vous remercions de votre attention et nous nous excusons pour tout inconvénient que cela pourrait vous causer.<br />

      Cordialement,<br />
      L'équipe Sartools
    `;
  }

  async sendEmail(data: MailjetSendEmailRequest) {
    try {
      const req = await mailjetClient.post('send', { version: 'v3.1' }).request({ 
        "Messages":[
          {
            "From": {
                "Email": data.fromEmail,
                "Name": data.fromName
            },
            "To": [
                {
                    "Email": data.toEmail,
                    "Name": data.toName
                }
            ],
            "Subject": Constant.EMAIL_SUBJECT,
            "TextPart": this.buildResetPasswordEmailContent(data.toName, data.link),
            "HTMLPart": this.buildResetPasswordEmailHtmlTemplate(data.toName, data.link)
          }
        ]
      });

      return req.body;
    } catch (err) {
      console.log(err);
      throw new ApiException(
        HttpStatus.INTERNAL_SERVER_ERROR,
        ErrorCode.MAILJET_SEND_EMAIL_FAILED,
      );
    }
  }
}