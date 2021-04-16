const fs = require('fs')

module.exports = function () {
  this.nuxt.hook('ready', () => {
    const dirs = fs.readdirSync('./static/images')
    const name_dict = {}
    const text_dict = {}
    dirs.forEach((dir) => {
      if (dir === '.DS_Store') return
      const files = fs.readdirSync(`./static/images/${dir}`)
      name_dict[dir] = files.filter(/./.test.bind(/(jpg|png)$/))
      if (dir.search(/-shrink$/) !== -1) return
      const text = fs.readFileSync(`./static/images/${dir}/content.md`, 'utf-8')
      text_dict[dir] = text
    })

    fs.writeFile(
      __dirname + '/../dist/files.json',
      JSON.stringify(name_dict),
      (err, result) => {
        if (err) console.log(err)
      }
    )

    fs.writeFile(
      __dirname + '/../dist/text.json',
      JSON.stringify(text_dict),
      (err, result) => {
        if (err) console.log(err)
      }
    )

    console.log('generate files.json')
  })
}
