<template>
  <div>
    <input v-model="result" type="text" class="answer" readonly/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        result: state => state.calculator.result
      })
    }
  }
</script>

<style scoped>
  .answer {
    border: 2px gray solid;
    border-radius: 4px;
    height: 40px;
    font-size: 18px;
    padding: 0 5px;
  }
</style>