const fs = require('fs')

function getFileByePath (fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
      if (err) throw reject(err)
      resolve(dataStr)
    })
  })
}
getFileByePath('./files/1.txt')
  .then(function (data) {
    console.log(data)
  }, function () {
    console.log(err.message)
  })

// getFileByePath('./files/1.txt')
//   .then(function (data) {
//     console.log(data)
//     //读取文件2
//     return getFileByePath('.files/2.txt')
//   })
