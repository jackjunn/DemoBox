<template>
  <div id="childSecond">
    <h1>小儿子</h1>
    <input type="text"
           v-model="msg">
    <button @click="toBroder">给哥哥</button>
  </div>
</template>

<script>
import bus from '../common/bus'

export default {
  name: 'childSecond',
  data () {
    return {
      msg: '哥哥好'
    }
  },
  methods: {
    toBroder () {
      bus.$emit('getBroder', this.msg)
    }
  }
}
</script>

<style scoped>
#childSecond {
  background-color: bisque;
}
</style>