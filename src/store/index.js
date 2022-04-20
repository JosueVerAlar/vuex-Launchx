import { createStore } from 'vuex'

export default createStore({
  state: {
    opcion1: 'Pan de Zanahoria',
    precio1: '$179 pesos',
    adornoOp1: 'Zarzamora',
    adorno2_Op1: 'Chispas de chocolate',
    cantidad: 0,
    items: 0,

    opcion2: 'Pan de nuez',
    precio2: '$179 pesos',
    adornoOp2: 'Zarzamora',
    adorno2_Op2: 'Chispas de chocolate',
    cantidad2: 0,

    opcion3: 'Pan de Naranja',
    precio3: '$179 pesos',
    adornoOp3: 'Zarzamora',
    adorno2_Op3: 'Chispas de chocolate',
    cantidad3: 0,

    opcion4: 'Pan de chispas de chocolate',
    precio4: '$179 pesos',
    adornoOp4: 'Zarzamora',
    adorno2_Op4: 'Chispas de chocolate',
    cantidad4: 0,

    totalFresa: 0 + 'g',
    solicitadoFresa: 0 + 'g',
    restanteFresa: 0 + 'g',
    estatusFresa: 'Aún Disponible',

    totalChocolate: 0 + 'g',
    solicitadoChocolate: 0 + 'g',
    restanteChocolate: 0 + 'g',
    estatusChocolate: 'Aún Disponible',

    totalNaranja: 0 + 'g',
    solicitadoNaranja: 0 + 'g',
    restanteNaranja: 0 + 'g',
    estatusNaranja: 'Aún Disponible',

    totalVainilla: 0 + 'g',
    solicitadoVainilla: 0 + 'g',
    restanteVainilla: 0 + 'g',
    estatusVainilla: 'Aún Disponible',

    totalNueces: 0 + 'g',
    solicitadoNueces: 0 + 'g',
    restanteNueces: 0 + 'g',
    estatusNueces: 'Aún Disponible',

    totalTrozosChocolate: 0 + 'g',
    solicitadoTrozosChocolate: 0 + 'g',
    restanteTrozosChocolate: 0 + 'g',
    estatusTrozosChocolate: 'Aún Disponible',

    totalFresaFresca: 0 + 'g',
    solicitadoFresaFresca: 0 + 'g',
    restanteFresaFresca: 0 + 'g',
    estatusFresaFresca: 'Aún Disponible',

    totalZanahoria: 0 + 'g',
    solicitadoZanahoria: 0 + 'g',
    restanteZanahoria: 0 + 'g',
    estatusZanahoria: 'Aún Disponible',

    totalAlmendra: 0 + 'g',
    solicitadoAlmendra: 0 + 'g',
    restanteAlmendra: 0 + 'g',
    estatusAlmendra: 'Aún Disponible',

    totalArandano: 0 + 'g',
    solicitadoArandano: 0 + 'g',
    restanteArandano: 0 + 'g',
    estatusArandano: 'Aún Disponible',

    totalPasas: 0 + 'g',
    solicitadoPasas: 0 + 'g',
    restantePasas: 0 + 'g',
    estatusPasas: 'Aún Disponible',

    totalChispas: 0 + 'g',
    solicitadoChispas: 0 + 'g',
    restanteChispas: 0 + 'g',
    estatusChispas: 'Aún Disponible',
  },
  getters: {
  },
  mutations: {
    bajarContador(state){
      state.cantidad--;
    },
    subirContador(state){
      state.cantidad++;
    },
    bajarContador2(state){
      state.cantidad2--;
    },
    subirContador2(state){
      state.cantidad2++;
    },
    bajarContador3(state){
      state.cantidad3--;
    },
    subirContador3(state){
      state.cantidad3++;
    },
    bajarContador4(state){
      state.cantidad4--;
    },
    subirContador4(state){
      state.cantidad4++;
    }
  },
  actions: {
  },
  modules: {
  }
})
