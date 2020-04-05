import * as winston from 'winston'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console({
      format: winston.format.json()
    })
  ]
})

if (process.env.NODE_ENV === 'development') {
  logger.level = 'debug'
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  )
}

export default logger;
