import logger from "./logger.js"

const requestLogger = (request, response, next) => {
    logger.info('Method: ', request.method)
    logger.info('Path: ', request.path)
    logger.info('Body: ', request.body)
    logger.info('-------------')

    next()
}

const unknownEndpoint = (request, response) => {
    response.status(400).json({error: 'Unknown endpoint'})
}

export default {requestLogger, unknownEndpoint}