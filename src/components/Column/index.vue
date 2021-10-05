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

<style>
.table-cell-wrapper {
  display: inline-block;
}

.table-cell-header {
  padding: 15px;
  border-radius: 3px;
  border: 1px solid black;
  background-color: darkgrey;
}

h2 {
  margin: 0;
}
</style>