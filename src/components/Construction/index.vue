<template>
  <div class="construction">
    Mobile view coming soon...
    <Duck />
  </div>
</template>

<script>
import Duck from '../Duck';

export default {
  name: 'Construction',
  components: {
    Duck
  }
}
</script>

<style>
  @media screen and (min-width: 1025px) {
    .construction {
      display: none !important;
    }
  }

  .construction {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background: midnightblue;
    color: wheat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>