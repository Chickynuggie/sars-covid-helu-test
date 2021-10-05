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
  padding: 10px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.55);
  background-color: rgba(0, 0, 0, 0.25);
  margin: 0;
}
</style>