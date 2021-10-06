<template>
  <div>
    <Construction />
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
import Construction from './components/Construction';

export default {
  name: 'App',
  components: {
    Table,
    Header,
    Footer,
    Spinner,
    Duck,
    Chart,
    Construction
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
