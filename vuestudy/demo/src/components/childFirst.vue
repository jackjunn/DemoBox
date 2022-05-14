<template>
  <div id="childFirst">
    <h1>大儿子{{msg}}</h1>
    <input type="text"
           v-model="changeVal">
    <button @click="btn('，你好')">vuex</button>
  </div>
</template>

<script>
import bus from '../common/bus'
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  name: "childFirst",
  created () {
    axios({
      url: '/home'
    }).then(res => {
      console.log(res.data)
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
  },
  methods: {
    ...mapMutations(['btn'])
  }
}
</script>

<style scoped>
#childFirst {
  background-color: blueviolet;
}
</style>