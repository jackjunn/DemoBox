<template>
  <div id="homePage">
    <h1>老爸{{msg}}</h1>
    <h1>{{vuexxxx}},长度{{change}}</h1>
    <input type="text"
           v-model="toChilddata">
    <childFirst @getChildData="getVal"></childFirst>
    <childSecond :fathersData="toChilddata"></childSecond>
  </div>
</template>
<script>
import childFirst from "../components/childFirst.vue"
import childSecond from "../components/childSecond.vue"
import { mapState, mapGetters } from 'vuex'

export default {
  name: "homePage",
  components: {
    childFirst,
    childSecond
  },
  data () {
    return {
      msg: '',
      toChilddata: ""
    }
  },
  methods: {
    getVal (val) {
      this.msg = val
    }
  },
  computed: {
    ...mapState(['vuexxxx']),
    ...mapGetters(['change'])
  }
}
</script>

<style scoped>
#homePage {
  background-color: aqua;
  padding: 20px;
}
</style>