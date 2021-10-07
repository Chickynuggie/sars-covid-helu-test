<template>
  <div class="header">
    <div>
      <img src="../../assets/virus.svg" />
      <span>SARS-CoV2 chart</span>
    </div>
    <ViewSwitcher />
  </div>
</template>

<script>
import ViewSwitcher from "../ViewSwitcher";

export default {
  name: "Header",
  components: {
    ViewSwitcher,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  width: 50vw;
  margin: 2vh auto;
  height: 115px;
  color: white;
  justify-content: space-between;
}

img {
  width: 100px;
  height: 100px;
  margin: 0 20px;
}

span {
  font-size: 30px;
}
</style>
