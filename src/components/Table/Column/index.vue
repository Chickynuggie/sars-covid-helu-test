<template>
 <div class="table-cell-wrapper">
    <div class="table-cell-header">
      <span>{{ headerTitle }}</span>
    </div>
    <Cell v-for="dataBit in displayData" :key="dataBit" :display-data="dataBit" :class="customClass" />
  </div>

</template>

<script>
import Cell from '../Cell';

export default {
  name: 'Column',
  props: ['headerTitle', 'displayData', 'customClass'],
  components: {
      Cell
  }
}
</script>

<style scoped>
.table-cell-wrapper {
  min-width: 25%;
}

.table-cell-header {
  padding: 10px;
  border-radius: 3px;
  border: 1px solid black;
  font-size: 1vw;
  background-color: rgba(0, 0, 0, 0.45);
}
</style>