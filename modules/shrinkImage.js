const fs = require('fs')
const sharp = require('sharp')

const width = 320

module.exports = function () {
  this.nuxt.hook('ready', () => {
    const dirs = fs
      .readdirSync('./static/images')
      .filter(/./.test.bind(/^(?!.*shrink).*$/))
    dirs.forEach((dir) => {
      if (dir === '.DS_Store') return
      if (
        !fs.existsSync(`./static/images/${dir}-shrink`) &&
        dir !== '.DS_Store'
      ) {
        fs.mkdirSync(`./static/images/${dir}-shrink`)
      }
      const files = fs.readdirSync(`./static/images/${dir}`)
      files.filter(/./.test.bind(/(jpg|png)$/))
      files.forEach((file) => {
        sharp(`./static/images/${dir}/${file}`)
          .resize({ width })
          .toFile(`./static/images/${dir}-shrink/${file}`)
      })
    })
  })
}
