const TIMER = 1000

export default function Http({
  name = 'cars',
  timer = TIMER,
}) {
  return {
    name,
    timer,
    __proto__: httpMethods,
  }
}

const httpMethods = {
  get() {
    const promise = new Promise((resolve, reject) => {
      const data = mocks[this.name] || require(`./mocks/${this.name}.js`).default
      setTimeout(() => {
        resolve(data.get)
      }, this.timer)
    })

    return promise
  },
}

const mocks = {}
