<template>
  <div class="header">
      <img src="../../assets/virus.svg">
      <h1>SARS-CoV2 chart</h1>
      <CountryInput />
  </div>
</template>

<script>
import CountryInput from './CountryInput';

export default {
  name: 'Header',
  components: {
      CountryInput
  }
}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    width: 50vw;
    margin: 0 auto 10vh;
    height: 115px;
    color: white;
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