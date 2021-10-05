<template>
  <span>{{ displayData }}</span>
</template>

<script>

export default {
  name: 'Cell',
  props: ['displayData']
}
</script>

<style scoped>
span {
  padding: 10px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.55);
  background-color: rgba(0, 0, 0, 0.25);
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
}
</style>