const { QueueServiceClient, StorageSharedKeyCredential } = require('@azure/storage-queue')
const { account, accountKey} = require('../access/azure-queue-storage-access')

// Use StorageSharedKeyCredential with storage account and account key
// StorageSharedKeyCredential is only avaiable in Node.js runtime, not in browsers
const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey)

const queueServiceClient = new QueueServiceClient(
    `https://${account}.queue.core.windows.net`,
    sharedKeyCredential,
    {
        retryOptions: { maxTries: 4 }, // Retry options
        telemetry: { value: "BasicSample/V11.0.0" } // Customized telemetry string
    }
)

module.exports = queueServiceClient