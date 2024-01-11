const info = (...params) => {
  if (process.env.NODE_ENV === 'production') {
    console.log = function () { }
  }

  if (process.env.NODE_ENV !== 'test') {
    console.log(...params)
  }
}

const error = (...params) => {
  console.log(...params)
}

module.exports = {
  info, error
}