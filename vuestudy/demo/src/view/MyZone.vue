<template>
  <div id="myzone">
    <h1>我的空间</h1>
    <h2>{{names}}</h2>
    <strong>{{ages}}{{num}}</strong><button @click="add">年龄</button>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      names: state => state.names.names,
      ages: state => state.ages.ages,
      num: state => state.ages.num
    })
  },
  methods: {
    ...mapMutations(['add'])
  }
}
</script>