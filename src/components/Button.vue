<template>
  <button class="btn" @click="tap({ number: number })">{{number}}</button>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: {
      number: String
    },
    methods: {
      ...mapActions('calculator', ['tap'])
    }
  }
</script>

<style scoped>
  .btn {
    border: 2px gray solid;
    width: 60px;
    height: 60px;
    border-radius: 2px;
    font-size: 30px;
    display: block;
    color: gray;
  }
</style>