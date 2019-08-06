const fs = require('fs')

function getFileByePath (fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
      if (err) return reject(err)
      resolve(dataStr)
    })
  })
}
// getFileByePath('./files/1.txt')
//   .then(function (data) {
//     console.log(data)
//   }, function () {
//     console.log(err.message)
//   })


//按顺序读1,2,3
getFileByePath('./files/11.txt')
  .then(function (data) {
    console.log(data)

    return getFileByePath('./files/22.txt')
  })
  .then(function (data) {
    console.log(data)
    return getFileByePath('./files/3.txt')
  })
  .then(function (data) {
    console.log(data)
  })
  .catch(function (err) {
    //如果前面有任何执行失败,马上终止并抛出异常
    console.log(err.message)
  })
