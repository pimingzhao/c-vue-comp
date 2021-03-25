const { writeFile, readFile } = require("../tool/fileTool");

(async () => {
  try {
    const template = await readFile(__dirname + "/../template.vue");
    const res = `~~~
\/\/ built-in template
${template}
~~~`;
    const reg = /~~~\n\/\/ built-in template[\s\S]*~~~$/;
    const pathList = [__dirname + "/../readme.md", __dirname + "/../readme_zh-CN.md"];
    // 更新 reademe 模板中内置模板内容
    for (const path of pathList) {
      let readme = await readFile(path);
      readme = readme.replace(reg, res);
      await writeFile(path, readme);
    }
  } catch (err) {
    console.log(err);
  }
  process.exit(0);
})()