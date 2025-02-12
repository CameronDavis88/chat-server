
const messages = []
let id = 0


module.exports = {
    create: (req, res) => {
        const { text, time } = req.body
        messages.push({ id, text, time })
        id++
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        const { text } = req.body
        const updateId = req.params.id
        messageIndex = messages.findIndex((messages) => messages.id === +updateId)
        let message = messages[messageIndex]
        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).send(messages)
    },

    delete: (req, res) => {
        const updateId = req.params.id
        messageIndex = messages.findIndex((messages) => messages.id === +updateId)
        messages.splice(messageIndex, 1)
        res.status(200).send(messages)
    }
}