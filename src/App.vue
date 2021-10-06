<template>
  <div>
    <Spinner />
    <Header />
    <Chart />
    <Table />
    <Footer />
    <Duck />
  </div>
</template>

<script>
import Table from './components/Table'
import Header from './components/Header';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import Duck from './components/Duck';
import Chart from './components/Chart';

export default {
  name: 'App',
  components: {
    Table,
    Header,
    Footer,
    Spinner,
    Duck,
    Chart
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
