const queueServiceClient = require('./queue-service-client')

async function processMessage(queueName) {
    const queueClient = queueServiceClient.getQueueClient(queueName);
    const response = await queueClient.receiveMessages();
    
    if (response.receivedMessageItems.length == 1) {
        const receivedMessageItem = response.receivedMessageItems[0];
        console.log(`Processing & deleting message with content: ${receivedMessageItem.messageText}`);

        const deleteMessageResponse = await queueClient.deleteMessage(
            receivedMessageItem.messageId,
            receivedMessageItem.popReceipt
        );

        console.log(`Delete message succesfully, service assigned request Id: ${deleteMessageResponse.requestId}`);

        return deleteMessageResponse.requestId
    }
}

module.exports = processMessage