# c-vue-comp
通过命令行快速创建vue组件

使用其他语言阅读：[English](./readme.md) | 简体中文

# 安装
~~~
npm i c-vue-comp -g
~~~

# 使用
~~~
c-comp-cli componetName
~~~

# 全部命令
~~~
-h --help    [show all commands]
-v --version [show version]
name         [create single componet directly]
dir name     [create folder componet directly]
~~~

# 配置文件说明
我们内置了一个 `vue` 模板，并通过它创建新的 `vue` 组件。

若你在 `node_modules` 同级目录创建一个 `vue` 模板 `vtemplate.vue` 文件。

我们将在创建新的组件时优先使用你的 `vue` 模板。

~~~
// built-in template
<template>
  <div :class="prefixCls">
    
  </div>
</template>

<script>
const prefixCls = "";

export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      prefixCls: prefixCls
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>

~~~