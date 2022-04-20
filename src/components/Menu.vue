<template>
  <div>
    <br><br>
    <h2 class="tituloMenu">Pan de la casa</h2>
    <br><br>
    
    <div>
        <div>
            <div class="tituloOpciones">
                {{$store.state.opcion1}}
            </div>
            <div class="precios">
                {{$store.state.precio1}}
            </div>
            <br>
            <div class="botones">
                <div>
                    <button @click="$store.commit('bajarContador')" class="botonOperador">-</button>
                    {{$store.state.cantidad}}
                    <button @click="$store.commit('subirContador')" class="botonOperador">+</button><br>
                </div><br>
                <button class="botonAñadirCarrito">Añadir al carrito</button>
            </div>
            <br>
            <div class="carruselFotos">
                <img src="../assets/pastelZanahoria.jpeg" alt="pastel de zanahoria" class="imagenPastel">
                <img src="../assets/pastelZanahoria2.jpeg" alt="pastel en otra posición" class="imagenPastel">
                <img src="../assets/pastelZanahoria3.jpeg" alt="pastel en otra posición" class="imagenPastel">
            </div>
        </div>
        <br><br>
        
        <div>
            <div class="tituloOpciones">
                {{$store.state.opcion2}}
            </div>
            <div class="precios">
                {{$store.state.precio2}}
            </div><br>
            <div class="botones">
                <div>
                    <button @click="$store.commit('bajarContador2')" class="botonOperador">-</button>
                    {{$store.state.cantidad2}}
                    <button @click="$store.commit('subirContador2')" class="botonOperador">+</button><br>
                </div><br>
                <button class="botonAñadirCarrito">Añadir al carrito</button>
            </div>
            <br>
            <div class="carruselFotos">
                <img src="../assets/pastelNuez.jpeg" alt="pastel de zanahoria" class="imagenPastel">
                <img src="../assets/pastelNuez2.jpeg" alt="pastel en otra posición" class="imagenPastel">
                <img src="../assets/pastelNuez3.jpeg" alt="pastel en otra posición" class="imagenPastel">
            </div>
        </div>
    </div>
    <br><br>
    <div>
        <PedidoCliente/>
    </div>
    <br><br>
    <h2 class="tituloMenu">Sugerencias</h2>
    <br>
    <div class="sugerencias">
        <div>
            <img src="../assets/pastelNaranja.jpeg" alt="pastel de naranja" class="imagenSugerencia">
            <div>
                {{$store.state.opcion3}}<br>
                {{$store.state.precio3}}
            </div>
            <br>
            <div class="botones">
                <div>
                    <button @click="$store.commit('bajarContador3')" class="botonOperador">-</button>
                    {{$store.state.cantidad3}}
                    <button @click="$store.commit('subirContador3')" class="botonOperador">+</button><br>
                </div><br>
                <button class="botonAñadirCarrito">Añadir al carrito</button>
            </div>
        </div>
        <br>
        
        <div>
            <img src="../assets/pastelChispas.jpeg" alt="pastel de chispas" class="imagenSugerencia">
            <div>
                {{$store.state.opcion4}}<br>
                {{$store.state.precio4}}
            </div>
            <br>
            <div class="botones">
                <div>
                    <button @click="$store.commit('bajarContador4')" class="botonOperador">-</button>
                    {{$store.state.cantidad4}}
                    <button @click="$store.commit('subirContador4')" class="botonOperador">+</button><br>
                </div><br>
                <button class="botonAñadirCarrito">Añadir al carrito</button>
            </div>
        </div>
        <br><br>
    </div>
    <br><br>
  </div>
</template>

<script>
import PedidoCliente from '@/components/PedidoCliente.vue';

export default {
    name: 'Pasteles',
    components: {
        PedidoCliente,
    }
}
</script>

<style>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .tituloMenu{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        display: flex;
        justify-content: flex-start;
        margin-left: 60px;
        color: white;
        background-color: black;
    }

    .tituloOpciones{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 30px;
        color: white;
    }

    .precios{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: white;
    }
    
    .sugerencias{
        display: flex;
        justify-content: center;
        color: white;
    }
    .imagenSugerencia{
        width: 150px;
    }

    .imagenPastel{
        width: 350px;
    }

    .carruselFotos{
        display: flex;
        justify-content: space-around;
    }

    .botonOperador{
        width: 25px;
        border-color: none;
    }

    .botonAñadirCarrito{
        display: flex;
        justify-content: center;
        cursor: pointer;
        display: inline-block;
        background: #333;
        color: white;
        font-size: 12px;
        border: 0;
        padding: 1rem 1.5rem;
    }

    .botonAñadirCarrito:focus {
    outline: none;
    }

    .botonAñadirCarrito:hover {
    transform: scale(0.98);
    }
</style>