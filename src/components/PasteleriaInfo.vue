<template>
    <footer>
        <br>
        <h2>Contacto</h2>
        <h3>Escríbenos y nos pondremos en contacto contigo</h3>
        <br><br>
        <div class="contenidosContacto">
            <div>
                <form action="comentarios.js">
                    <label for="nombre" class="etiquetas">Nombre:</label><br>
                    <input type="text" id="nombre" name="nombre" placeholder="nombre" class="datosCliente">
                    
                    <br><br>
                    <label for="correo" class="etiquetas">Email</label><br>
                    <input type="email" id="correo" name="correo" placeholder="ejemplo@gmail.com" class="datosCliente">
                    
                    <br><br>
            
                    <label for="comment" class="etiquetas">Comentarios</label><br>        
                    <textarea id="ContactComment" name="ContactComment" data-msg="Requerido" rows="5" style="resize: none;" class="textArea"></textarea>

                    <br><br>
                    
                    <button id="comments" >Enviar Comentarios</button>
                </form>
            </div>
            <div class="datosContacto">
                <div>
                    <p>Telefono: 55 6182 8247</p>
                    <p>Correo: contacto@pasteldelicia.com</p>
                </div>
                <br>
                
                <div>
                    <p>Horarios de atención: Lunes a viernes de 12Hrs a 16Hrs</p>
                    <p>Dirección: Av. Homero 342, Polanco, Polanco IV Secc, Miguel Hidalgo, 11550 Ciudad de México, CDMX</p>
                </div>
                <br>

                <div>
                    <img src="../assets/CapturaWebMap.jpeg" alt="imagen de ubicación" width="550px">
                </div>
            </div>
        </div>
        <br>
        <p>En el siguiente enlace se puede consultar el ícono de "carrito" usado para este desarrollo:</p>
        <a href="https://www.flaticon.es/iconos-gratis/carrito-inteligente" title="carrito inteligente iconos">Link a Flaticon</a>
        <br><br>
    </footer>
</template>

<script>
    export default {
        name: 'PasteleriaInfo',
    }
</script>

<style scoped>
    footer{
        background-color: #D9D9D9;
    }

    h2{
        font-size: 25px;
        text-align: center;
    }

    h3{
        font-size: 18px;
        text-align: center;
    }

    .datosContacto {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-content: flex-start;
        margin-right: 130px;
        margin-left: 130px;
    }

    .contenidosContacto{
        display: flex;
        justify-content: space-evenly;
    }

    .textArea{
        height: 150px;
        width: 300px;
        margin-left:60px;
    }

    .etiquetas{
        display: flex;
        justify-content: flex-start;
        margin-left:60px;
    }

    .datosCliente{
        width: 300px;
        height: 30px;
        margin-left:60px;
    }

    button {
    cursor: pointer;
    display: inline-block;
    background: #333;
    color: white;
    font-size: 14px;
    border: 0;
    padding: 1rem 1.5rem;
    display: flex;
    align-content: flex-start;
    margin-left:60px;
    }

    button:focus {
    outline: none;
    }

    button:hover {
    transform: scale(0.98);
    }
</style>