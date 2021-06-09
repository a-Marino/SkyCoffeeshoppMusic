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
  :root {
    --negro-fondo: #0D0D0D;
    --violeta: #8E24AA;
    --verde-agua: #03F499;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    height: 100vh;
    width: 100vw;
    background-color: var(--negro-fondo) !important;
    box-sizing: border-box;
    color: #fff !important;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
