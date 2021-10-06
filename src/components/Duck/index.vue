<template>
  <img src="../../assets/duck.svg" @click="handleClick" />
</template>

<script>
export default {
  name: 'Duck',
  setup() {
    const handleClick = () => {
      window.open('https://www.youtube.com/watch?v=BtN-goy9VOY', '_blank').focus();
    }

    return {
      handleClick
    }
  }
}
</script>

<style scoped>
  img {
    position: absolute;
    left: -10px;
    bottom: -10px;
    width: 250px;
    height: 250px;
  }
</style>