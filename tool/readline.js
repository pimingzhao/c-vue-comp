/*
 * @Author: pimzh
 * @Date: 2020-11-13 11:27:18
 * @LastEditTime: 2020-11-15 20:30:58
 * @LastEditors: pimzh
 * @Description: readline 方法
 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const rlQuest = (query = "") => {
  return new Promise((resolve, reject) => {
    rl.question(query, anwser => {
      resolve(anwser);
    })
  })
}

const getBooleanQuest = async (question = "") => {
  const res = await rlQuest(question);
  if (res.toLowerCase() === "y") {
    return true;
  } else if (res.toLowerCase() === "n") {
    return false;
  } else {
    console.log("只能输入 Y 或 N");
    return getBooleanQuest(question);
  }
}

const rlClose = () => {
  rl.close();
}

module.exports = {
  rlQuest,
  getBooleanQuest,
  rlClose
}