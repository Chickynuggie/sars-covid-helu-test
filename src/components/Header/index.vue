<template>
  <div class="header">
      <img src="../../assets/virus.svg">
      <h1>SARS-CoV2 chart</h1>
  </div>
</template>

<script>
import logo from '../../assets/virus.svg';

export default {
  name: 'Header',
  setup() {
      return logo;
  }
}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    border-bottom: 5px solid #2c3e50;
    height: 115px;
    background: lightgrey;
}

img {
    width: 100px;
    height: 100px;
    margin: 0 20px;
}

h1 {
    font-size: 30px;
}
</style>