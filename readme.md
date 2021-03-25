# c-vue-comp
Creating Vue components quickly through command line

Read this in other languages: English | [简体中文](./readme_zh-CN.md)

# install
~~~
npm i c-vue-comp -g
~~~

# use
~~~
c-comp-cli componetName
~~~

# commands
~~~
-h --help    [show all commands]
-v --version [show version]
name         [create single componet directly]
dir name     [create folder componet directly]
~~~

# Configuration file description

We built in a `vue` template and created new `vue` component through it.

If you are at the same level as `node_modules`, create a `vue` template ` vtemplate.vue` Documents.

We will give priority to your `vue` template when creating new components.

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