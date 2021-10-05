<template>
  <div>
    <Spinner />
    <Header />
    <Table />
    <Footer />
  </div>
</template>

<script>
import Table from './components/Table'
import Header from './components/Header';
import Footer from './components/Footer';
import Spinner from './components/Spinner';

export default {
  name: 'App',
  components: {
    Table,
    Header,
    Footer,
    Spinner
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
