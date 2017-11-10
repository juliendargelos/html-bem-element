const fs = require('fs')

fs.readFile('lib/index.js', (err, data) => {
  if(err) throw err
  data = data.toString().replace(/^export default /, '')
  fs.writeFile("lib/html-util-element.js", data, function(err) {
    if(err) throw err
  })
})
