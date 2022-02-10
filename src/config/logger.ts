import winston from 'winston';
import { configuration } from '.';
import { levels, colors } from '../constants/logger.constants';

const level = () => {
  const { environment } = configuration;
  return environment === 'development' ? 'debug' : 'warn';
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.colorize({ all: true }),
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  winston.format.printf((log) => `${log.timestamp} ${log.level}: ${log.message}`),
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  new winston.transports.File({ filename: 'logs/all.log' }),
];

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export default Logger;
