<template>
 <div class="square">
   <Answer/>
   <div class="btnGroup">
     <div class="btnWrapper"><Button number="7" /></div>
     <div class="btnWrapper"><Button number="8" /></div>
     <div class="btnWrapper"><Button number="9" /></div>
     <div class="btnWrapper"><Button number="/" /></div>
     <div class="btnWrapper"><Button number="4" /></div>
     <div class="btnWrapper"><Button number="5" /></div>
     <div class="btnWrapper"><Button number="6" /></div>
     <div class="btnWrapper"><Button number="*" /></div>
     <div class="btnWrapper"><Button number="1" /></div>
     <div class="btnWrapper"><Button number="2" /></div>
     <div class="btnWrapper"><Button number="3" /></div>
     <div class="btnWrapper"><Button number="-" /></div>
     <div class="btnWrapper"><Button number="C" /></div>
     <div class="btnWrapper"><Button number="0" /></div>
     <div class="btnWrapper"><Button number="=" /></div>
     <div class="btnWrapper"><Button number="+" /></div>
   </div>
 </div>
</template>

<script>
  import Answer from './Answer'
  import Button from './Button'

  export default {
    name: 'calculator',
    components: {
      Answer,
      Button
    }
  }
</script>

<style scoped>
  .square {
    border: 3px gray solid;
    border-radius: 4px;
    padding: 10px;
    width: 350px;
    margin: 20px auto;
  }

  .btnGroup {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btnWrapper {
    margin: 0 20px 20px 0;
  }

  .btnWrapper:nth-child(4n) {
    margin: 0;
  }
</style>