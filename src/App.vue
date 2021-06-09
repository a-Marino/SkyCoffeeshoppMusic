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
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

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
    min-height: 100%;
    min-width: 100%;
    background-color: var(--negro-fondo) !important;
    box-sizing: border-box;
    color: #fff !important;
    overflow-y: scroll;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif !important;
  }
</style>
