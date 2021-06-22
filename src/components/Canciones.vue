<template>
    <div class="flex flex-col space-y-3">
        <!-- Mobil  -->
        <div class="md:hidden flex-col mt-5">
            <ul class="flex md:flex-row flex-col mb-5 text-center" v-for="(cancion, index) in     cancionesState" :key="index">
                <li><img :src="cancion.imgPath" class="portadas-mov mb-2"></li>
                <li>{{cancion.titulo}}</li>
                <li>{{cancion.artista}}</li>
                <li>{{cancion.duracion}}</li>
                <li class="precio"><font-awesome-icon icon="shopping-cart" class="shopping-cart"/>{{cancion.precio}}</li>
            </ul>
        </div>
        <!-- MD and LG screens -->
        <table class="tabla md:table hidden md:mb-5">
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
        <button class="block mx-auto mt-5 mb-5 btn-more">Mas canciones</button>
    </div>  
</template>

<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'

export default {
    name: 'Canciones',
    computed: {
        ...mapState('canciones', ['cancionesState']),
        ...mapGetters('canciones', ['cancionesCounter'])
    }
}
</script>

<style scoped>
    .btn {
        color: black;
        background-color: var(--verde-agua);
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
        border-radius: 5px;
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

    .btn-more {
        background-color: var(--verde-agua);
        color: black;
        padding: 10px;
        border-radius: 5px;
    }
</style>