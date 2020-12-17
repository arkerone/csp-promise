class Channel {
  constructor () {
    this.takes = []
    this.puts = []
  }

  put (data) {
    return new Promise((resolve) => {
      if (this.takes.length > 0) {
        this.takes.shift()(data)
        resolve()
      } else {
        this.puts.push(() => {
          resolve()
          return data
        })
      }
    })
  }

  take () {
    return new Promise((resolve) => {
      if (this.puts.length > 0) {
        resolve(this.puts.shift()())
      } else {
        this.takes.push(resolve)
      }
    })
  }
}

module.exports = Channel
