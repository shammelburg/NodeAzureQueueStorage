const { addMessage, processMessage, peekMessage, listQueues, createQueue } = require('./azure-queue-storage')

const queueName = "test-queue";
const message = 'This is a message from Node.js'


async function main() {
    await createQueue(queueName)

    let i = 1;
    for await (const item of listQueues) {
        console.log(`Queue${i}: ${item.name}`);
        i++;
    }

    let peeking = await peekMessage(queueName)
    console.log(peeking.firstMessage)

    let add = await addMessage(queueName, message)
    console.log(add)
}

main()

// setInterval(async () => {
//     let processed = await processMessage(queueName)
//     console.log(processed)

// }, 5000)