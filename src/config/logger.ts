import { createLogger, format, Logger, transports } from 'winston';
import morgan from 'morgan';

const Logger: Logger & { requests?: any; header?: any } = createLogger({
  format: format.combine(format.simple(), format.colorize({ all: true })),
  transports: [new transports.Console()],
});

const requestFormat = ':remote-addr [:date[iso]] ":method :url" :status';

const requests = morgan(requestFormat, {
  stream: {
    write: (message) => {
      // Remove all line breaks
      const log = message;
      const status = log.substring(log.length - 3);
      if (!status.startsWith('4') && !status.startsWith('5')) {
        return Logger.info(log);
      }
      return '';
    },
  },
});

Logger.requests = requests;

Logger.header = (req: { method: string; ip: string; originalUrl: string; id: string }) => {
  const date = new Date().toISOString();
  return `${req.ip} [${date}] ${req.id} "${req.method} ${req.originalUrl}"`;
};

export default Logger;
