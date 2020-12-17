const Channel = require('./Channel')

module.exports = ({
  channel () {
    return new Channel()
  },
  async put (channel, data) {
    return channel.put(data)
  },
  async take (channel) {
    return channel.take()
  },
  async sleep (delay) {
    return new Promise((resolve) => setTimeout(resolve, delay))
  },
})

