/*
 * @Author: pimzh
 * @Date: 2020-11-19 09:57:57
 * @LastEditTime: 2020-11-23 11:12:39
 * @LastEditors: pimzh
 * @Description: 
 */
const { readFile, writeFile, writeDir } = require("./tool/fileTool");
const { rlQuest, rlClose, getBooleanQuest } = require("./tool/readline");

const getIndex = (name) => {
  const compName = name.replace("-", "");
  return `import ${compName} from "./${name}";

export default ${compName};
`
}

const create = async (argv) => {
  try {

    // 读取外部目录中的配置文件
    let res = "";
    let fileName = "";
    let isSingle = true;
    const cwd = process.cwd();

    // 获取node_moudles 同级目录路径
    const outConfig = await readFile(__dirname + "/../../vtemplate.vue");
    if (!outConfig) {
      res = await readFile(__dirname + "/template.vue");
    } else {
      res = outConfig;
    }
    // 获取文件创建类型
    switch (argv.length) {
      case 0:
        isSingle = await getBooleanQuest("是否创建单文件组件(Y/N)：");
        break;
      case 1:
        fileName = argv[0] || "";
        break;
      default:
        fileName = argv[1] || "";
        if (argv[0] === "dir") {
          isSingle = false;
        } else {
          isSingle = await getBooleanQuest("是否创建单文件组件(Y/N)：");
        }
        break;
    }
    if (!fileName) {
      fileName = await rlQuest("当前组件的名称：");
    }

    // 替换 config 中的 name 为当前 fileName
    res = res.replace(`name: ""`, `name: "${fileName}"`);

    if (isSingle) {
      // 创建单文件 vue component
      await writeFile(cwd + `/${fileName}.vue`, res);
    } else {
      // 创建文件夹组件
      if (!!await writeDir(cwd + `/${fileName}`)) {
        await writeFile(cwd + `/${fileName}/${fileName}.vue`, res);
        const index = getIndex(fileName);
        await writeFile(cwd + `/${fileName}/index.js`, index);
      }
    }
    console.log("已成功创建组件：" + fileName);
    rlClose();
  } catch (err) {
    console.log("程序意外终止: ", err);
    process.exit(0);
  }
}

module.exports = create;