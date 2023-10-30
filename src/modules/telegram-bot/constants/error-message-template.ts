class MessageTemplateAbstract {
  method: string;
  url: string;
  status: number;
  ip: string;
  message: string;
  body_request?: object;
  query?: any;
  param?: any;
}

export function errorMessageTemplate(template: MessageTemplateAbstract) {
  const { method, url, status, ip, message, body_request, query } = template;

  return `
    App Name: GreenLab BE Service
    Environment: ${process.env.NODE_ENV}
    ${ip} ${method} ${url} - ${status}
    Body request: ${JSON.stringify(body_request)}
    Query request: ${JSON.stringify(query)}
    Error message: ${JSON.stringify(message)}
  `;
}
