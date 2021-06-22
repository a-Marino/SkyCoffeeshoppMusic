export default {
    namespaced: true,
    state: {
        // Datos de prueba
        cancionesState: [
          {
            id: 1,
            imgPath: 'https://upload.wikimedia.org/wikipedia/commons/2/20/TheBeatles68LP.jpg',
            titulo: 'Blackbird',
            artista: 'The Beatles',
            duracion: '3:12',
            precio: '22.50',
          },
          {
            id: 2,
            imgPath: 'https://images-na.ssl-images-amazon.com/images/I/A1Q8g0n%2BAqL._SL1500_.jpg',
            titulo: 'Jenny Wren',
            artista: 'Paul McCartney',
            duracion: '4:10',
            precio: '20.50',
          },
          {
            id: 3,
            imgPath: 'https://pbs.twimg.com/media/C8PshBaUMAIF2kW.jpg',
            titulo: 'Sign of the times',
            artista: 'Harry Styles',
            duracion: '6:15',
            precio: '15.50',
          },
        ],
    },
    getters: {
      cancionesCounter: state => {
        return state.cancionesState.length
      }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
}