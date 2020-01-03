const queueServiceClient = require('./queue-service-client')

async function deleteQueue(queueName) {
    const queueClient = queueServiceClient.getQueueClient(queueName);
    const deleteQueueResponse = await queueClient.delete();
    console.log(
        `Deleted queue successfully, service assigned request Id: ${deleteQueueResponse.requestId}`
    );

    return deleteQueueResponse
}

module.exports = deleteQueue