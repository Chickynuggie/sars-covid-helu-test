<template>
  <h4>{{ displayData }}</h4>
</template>

<script>

export default {
  name: 'Cell',
  props: ['displayData']
}
</script>

<style scoped>
h4 {
  padding: 15px;
  border-radius: 3px;
  border: 1px solid black;
  margin: 0;  
}
</style>