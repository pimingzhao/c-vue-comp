/*
 * @Author: pimzh
 * @Date: 2020-11-13 14:54:36
 * @LastEditTime: 2020-11-23 09:46:55
 * @LastEditors: pimzh
 * @Description: fs 方法的 promise 版
 */
const fs = require("fs");

const writeFile = (path = "", data = "", options = { encoding: "utf8" }) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, options, err => {
      if (!err) {
        resolve(true);
      } else {
        reject(err);
      }
    })
  })
}

const readFile = (path = "", options = { encoding: "utf8" }) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        resolve(false);
      }
    })
  })
}

const writeDir = (path = "") => {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, err => {
      if (!err) {
        resolve(true);
      } else {
        reject(err);
      }
    })
  })
}

module.exports = {
  readFile,
  writeFile,
  writeDir
}