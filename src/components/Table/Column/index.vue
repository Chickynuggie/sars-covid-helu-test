<template>
 <div class="table-cell-wrapper">
    <div class="table-cell-header">
      <h2>{{ headerTitle }}</h2>
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
  width: 25%;
}

.table-cell-header {
  padding: 10px;
  border-radius: 3px;
  border: 1px solid black;
  font-size: 0.6vw;
  background-color: rgba(0, 0, 0, 0.45);
}

h2 {
  margin: 0;
}
</style>