const queueServiceClient = require('./queue-service-client')

async function addMessage(queueName, message) {
    const queueClient = queueServiceClient.getQueueClient(queueName);
    // Send a message into the queue using the sendMessage method.
    const sendMessageResponse = await queueClient.sendMessage(Buffer.from(message).toString('base64'));
    console.log(
        `Sent message successfully, service assigned message Id: ${sendMessageResponse.messageId}, service assigned request Id: ${sendMessageResponse.requestId}`
    );

    return {
        status: sendMessageResponse._response.status,
        messageId: sendMessageResponse.messageId,
        requestId: sendMessageResponse.requestId,
        errorCode: sendMessageResponse.errorCode,
        insertedOn: sendMessageResponse.insertedOn,
        expiresOn: sendMessageResponse.expiresOn
    }
}

module.exports = addMessage