const fs = require('fs')
const path = require('path')

//返回读取到的内容
function getFileByPath (fpath, succCb, errCb) {
  fs.readFile(fpath, 'utf-8', (err, dataStr) => {
    if (err) return errCb(err)
    // console.log(dataStr)
    succCb(dataStr)
  })
}

// getFileByPath(path.join(__dirname, './1.txt'), function (data) {
//   console.log(data + '娃哈哈,成功了!')
// }, function (err) {
//   console.log('失败的结果' + err.message)
// })


//很多层嵌套,叫做回调地狱
getFileByPath(path.join(__dirname, './1.txt'), function (data) {
  console.log(data)

  getFileByPath(path.join(__dirname, './2.txt'), function (data) {
    console.log(data)

    getFileByPath(path.join(__dirname, './3.txt'), function (data) {
      console.log(data)

    })
  })
})