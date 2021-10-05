<template>
  <div>
    <Header />
    <HelloWorld />
    <Footer />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: white;
}
</style>
