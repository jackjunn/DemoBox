<template>
  <div id="homePage">
    <h1>老爸{{msg}}</h1>
    <childFirst @getChildData="getVal"></childFirst>
    <childSecond></childSecond>
  </div>
</template>
<script>
import childFirst from "../components/childFirst.vue"
import childSecond from "../components/childSecond.vue"

export default {
  name: "homePage",
  components: {
    childFirst,
    childSecond
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    getVal (val) {
      this.msg = val
    }
  }
}
</script>

<style scoped>
#homePage {
  background-color: aqua;
  padding: 20px;
}
</style>