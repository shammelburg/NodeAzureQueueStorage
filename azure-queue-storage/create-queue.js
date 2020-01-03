const queueServiceClient = require('./queue-service-client')

async function createQueue(queueName) {
    const queueClient = queueServiceClient.getQueueClient(queueName);
    const createQueueResponse = await queueClient.create();
    console.log(
        `Created queue ${queueName} successfully, service assigned request Id: ${createQueueResponse.requestId}`
    );

    return createQueueResponse
}

module.exports = createQueue