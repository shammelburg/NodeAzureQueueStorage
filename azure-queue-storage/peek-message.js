const queueServiceClient = require('./queue-service-client')

async function peekMessage(queueName) {
    const queueClient = queueServiceClient.getQueueClient(queueName);
    const peekMessagesResponse = await queueClient.peekMessages();
    // console.log(`The peeked message is: ${peekMessagesResponse.peekedMessageItems[0].messageText}`);
    return {
        messageCount: peekMessagesResponse.peekedMessageItems,
        firstMessage: peekMessagesResponse.peekedMessageItems.length > 0 ? peekMessagesResponse.peekedMessageItems[0].messageText : null
    }
}

module.exports = peekMessage
