<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
    components: {
      Nav,
    }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
  }
</style>
