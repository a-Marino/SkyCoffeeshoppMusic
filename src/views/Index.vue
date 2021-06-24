<template>
    <div>
        <section class="section-1 d-flex justify-content-center align-items-center">
            <h1 class="text-5xl">Index</h1>    
        </section> 
        <section class="canciones">
            <Canciones/>      
        </section>
    </div>
</template>

<script>
import Canciones from '@/components/Canciones.vue'

export default {
    name: 'Index',
    components: {
        Canciones
    },
}
</script>

<style>
    .section-1 {
        min-height: 100vh;
        min-width: 100%;
        background-image: url('https://s3.amazonaws.com/beatstarsdata/proweb/2.0/user-styles/uploads/published/2876769/main_bg_mobile.jpg?_=1622162090');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,.3);
    }

    .canciones {
        box-shadow: 10px -30px 40px 30px black;
    }

    @media (min-width: 768px) { 
        .section-1 {
            background-image: url('https://s3.amazonaws.com/beatstarsdata/proweb/2.0/user-styles/uploads/published/2876769/main_bg.jpg?_=1622162034');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
</style>