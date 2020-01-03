const queueServiceClient = require('./queue-service-client')

//let iter1 = queueServiceClient.listQueues();
// let i = 1;
// for await (const item of iter1) {
//     console.log(`Queue${i}: ${item.name}`);
//     i++;
// }

module.exports = queueServiceClient.listQueues()