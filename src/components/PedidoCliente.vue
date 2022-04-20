<template>
    <form action="pedido.js">
        <br><br>
        <h2 class="tituloMenu">Pedido Personalizado</h2>
        <br>

        <h2>Personaliza tu pastel ideal</h2>
        <br>
        
        <p>Selecciona el tamaño de tu pastel</p>
        <div>
            <input type="radio" id="small" name="tamaños" value="Chico">
            <label for="small">Chico</label><br>
            <input type="radio" id="medium" name="tamaños" value="Mediano">
            <label for="medium">Mediano</label><br>
            <input type="radio" id="big" name="tamaños" value="Grande">
            <label for="big">Grande</label><br>
            <input type="radio" id="extraBig" name="tamaños" value="Familiar">
            <label for="extraBig">Familiar</label>
        </div>
        <br><br>
                    
        <label for="pan">Elige el sabor de tu pan favorito</label><br>
        <div>
            <input list="pan">
            <datalist id="pan">
                <option value="Vainilla"></option>
                <option value="Chocolate"></option>
                <option value="Naranja"></option>
                <option value="Fresa"></option>
            </datalist>
        </div>
        <br><br>

        <label for="ingrediente">Elige el ingrediente secreto de tu pastel</label><br>
        <div>
            <input list="ingrediente">
            <datalist id="ingrediente">
                <option value="Nueces"></option>
                <option value="Trosos de chocolate"></option>
                <option value="Fresas frescas"></option>
                <option value="Zanahoria Rayada"></option>
                <option value="Almendras"></option>
                <option value="Arándanos"></option>
                <option value="Pasas"></option>
                <option value="Chispas de sabores"></option>
            </datalist>
        </div>
        <br><br>

        <label for="ingrediente">Elige el segundo ingrediente secreto (opcional +$25pesos)</label><br>
        <div>
            <input list="ingrediente2">
            <datalist id="ingrediente2">
                <option value="Nueces"></option>
                <option value="Trosos de chocolate"></option>
                <option value="Fresas frescas"></option>
                <option value="Zanahoria Rayada"></option>
                <option value="Almendras"></option>
                <option value="Arándanos"></option>
                <option value="Pasas"></option>
                <option value="Chispas de sabores"></option>
            </datalist>
        </div>
        <br><br>

        <label for="cubierta">Selecciona tu cubierta preferida</label><br>
        <div>
            <input list="cubierta">
            <datalist id="cubierta">
                <option value="Azúcar Glass espolvoreado"></option>
                <option value="Glaseado de limón"></option>
                <option value="Glaseado de guayaba"></option>
                <option value="Glaseado de fresa"></option>
                <option value="Mousse de chocolate"></option>
                <option value="Mousse de chocolate"></option>
                <option value="Sin cubierta"></option>
            </datalist>
        </div>
        <br>

        <p>Selecciona 2 adornos</p>
        <div>
            <input type="checkbox" id="seleccion1" name="seleccion1" value="naranja">
            <label for="seleccion1">Rebanadas de naranja</label>
            <br>
                    
            <input type="checkbox" id="seleccion2" name="seleccion2" value="chocolate">
            <label for="seleccion2">Chispas de chocolate</label>
            <br>

            <input type="checkbox" id="seleccion3" name="seleccion3" value="limon">
            <label for="seleccion3">Rebanadas de limón</label>
            <br>
            <input type="checkbox" id="seleccion3" name="seleccion3" value="fresa">
            <label for="seleccion3">Rebanadas de fresa</label>
            <br>

            <input type="checkbox" id="seleccion3" name="seleccion3" value="chispas">
            <label for="seleccion3">Chispas de sabores</label>
            <br><br>
                        
            <button type="reset" class="button">Reiniciar</button>
            <button id="pagar" class="button">Ir al pago</button> 
            <br><br>
        </div>
    </form>
</template>

<style scoped>
    form{
        background-image: url(../assets/pastelNaranja.jpeg);
    }
    .tituloMenu{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        display: flex;
        justify-content: flex-start;
        margin-left: 60px;
        color: white;
        background-color: black;
    }

    h2{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        display: flex;
        justify-content: center;
        color: white;
    }

    .button {
    cursor: pointer;
    display: inline-block;
    background: #333;
    color: white;
    font-size: 14px;
    border: 0;
    padding: 1rem 1.5rem;
    }

    .button:focus {
    outline: none;
    }

    .button:hover {
    transform: scale(0.98);
    }
</style>