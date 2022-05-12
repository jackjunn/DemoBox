<template>
  <div id="childFirst">
    <h1>大儿子{{msg}}</h1>
    <input type="text"
           v-model="changeVal">
  </div>
</template>

<script>
import bus from '../common/bus'
import axios from 'axios'
export default {
  name: "childFirst",
  created () {
    axios({
      url: 'http://localhost:3000/home'
    }).then(res => {
      console.log(res)
    })
  },
  data () {
    return {
      changeVal: '',
      msg: ""
    }
  },
  mounted () {
    bus.$on('getBroder', (str) => {
      this.msg = str
    })
  },
  watch: {
    changeVal () {
      this.$emit('getChildData', this.changeVal)
    }
  }
}
</script>

<style scoped>
#childFirst {
  background-color: blueviolet;
}
</style>