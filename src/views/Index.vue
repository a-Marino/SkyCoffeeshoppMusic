<template>
    <div>
        <section class="section-1 d-flex justify-content-center align-items-center">
            <h1 class="text-5xl">Index</h1>    
        </section> 
        <section class="section-2">
            <div class="flex flex-col space-y-3">
                <!-- Mobil  -->
                <div class="md:hidden flex-col">
                    <ul class="flex md:flex-row flex-col mb-5 text-center" v-for="(cancion, index) in     cancionesState" :key="index">
                        <li><img :src="cancion.imgPath" class="portadas-mov mb-2"></li>
                        <li>{{cancion.titulo}}</li>
                        <li>{{cancion.artista}}</li>
                        <li>{{cancion.duracion}}</li>
                        <li class="precio"><font-awesome-icon icon="shopping-cart" class="shopping-cart"/>{{cancion.precio}}</li>
                    </ul>
                </div>
                <!-- MD and LG screens -->
                <table class="tabla md:table hidden">
                    <thead class="text-xs">
                        <tr>
                            <th></th>
                            <th>Titulo</th>
                            <th>Artista</th>
                            <th>Duracion</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm">
                        <!-- Solo se muestran 7 canciones -->
                        <tr v-for="(cancion, index) in cancionesState.slice(0, 7)" :key="index">
                            <th><img :src="cancion.imgPath" class="portadas"></th>
                            <th>{{cancion.titulo}}</th>
                            <th>{{cancion.artista}}</th>
                            <th>{{cancion.duracion}}</th>
                            <th><button class="btn w-full"><font-awesome-icon icon="shopping-cart" class="mr-1"/> {{cancion.precio}}</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>  
        </section>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'

export default {
    name: 'Index',
    computed: {
        ...mapState('canciones', ['cancionesState']),
        ...mapGetters('canciones', ['cancionesCounter'])
    }
}
</script>

<style scoped>
    .section-1 {
        min-height: 100vh;
        min-width: 100%;
        background-image: url('https://s3.amazonaws.com/beatstarsdata/proweb/2.0/user-styles/uploads/published/2876769/main_bg_mobile.jpg?_=1622162090');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,.3);
    }

    .btn {
        color: black;
        background-color: var(--verde-agua);
    }

    .section-2 {
        min-height: 100vh;
        min-width: 100%;
        box-shadow: 10px -30px 40px 30px black;
    }

    .categorias {
        color: gray;
        text-transform: uppercase;
    }

    .tabla {
        width: 90%;
        font-family: 'Poppins', sans-serif !important;
        margin: auto;
    }
    
    .portadas {
        height: 60px;
        border-radius: 5px;
    }

    .portadas-mov {
        display: block;
        margin: auto;
        height: 150px;
    }

    thead {
        color: gray;
        text-transform: uppercase;
    }

    th {
        padding: 15px;
    }

    tbody th {
      border-bottom: 1px solid #343434;
    }

    .precio {
        color: var(--verde-agua);
    }

    .shopping-cart {
        color: var(--verde-agua);
        margin-right: 5px;
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