<template>
    <div>
        <h1>Recepción de pedidos</h1>
        <br><br>

        <h2>Pedidos (Visión general)</h2><br>
        <hr><br>
        <!-- Pedidos recibidos (general) -->
        <table>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Dirección</th>
                <th>Tamaño de pastel</th>
                <th>Tipo de pastel</th>
                <th># Pedido</th>
                <th>Estatus</th>
                <th>Opciones</th>
            </tr>
            <tr>
                <td>Alfredo López</td>
                <td>alfredolopez@gmail.com</td>
                <td>55 6172 7839</td>
                <td>Calle londres, 231, Colonia del Valle</td>
                <td>Grande</td>
                <td>Pan de naranja</td>
                <td>2039</td>
                <td>En preparación</td>
                <td>
                    <button id="cancelador">Cancelar Pedido</button>
                </td>
            </tr>
            <tr>
                <td>Alfredo Miranda</td>
                <td>alfredomiranda@gmail.com</td>
                <td>55 6172 8071</td>
                <td>Calle Chemax, 123, Churubusco</td>
                <td>Mediano</td>
                <td>Pan de nuez con zanahoria</td>
                <td>2347</td>
                <td>En preparación</td>
                <td>
                    <button id="cancelador">Cancelar Pedido</button>
                </td>
            </tr>
        </table>
        <br><hr>
        <br><br>

        <!-- Pedidos personalizados-->
        <h2>Pedidos personalizados</h2><br>
        <hr>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Correo electrónico</th>
                <th>Teléfono</th>
                <th>Dirección</th>
                <th>Tamaño de pastel</th>
                <th>Sabor de pan</th>
                <th>Ingrediente secreto</th>
                <th>2° Ingrediente secreto (opcional)</th>
                <th>Cubierta</th>
                <th>Adornos</th>
                <th>Estatus</th>
                <th>Opciones</th>
            </tr>
            <tr>
                <td>Ricardo Sánchez</td>
                <td>alfredolopez@gmail.com</td>
                <td>55 6172 7839</td>
                <td>Calle londres, 231, Colonia del Valle</td>
                <td>Grande</td>
                <td>Chocolate</td>
                <td>Arándanos</td>
                <td>Nueces</td>
                <td>Glaseado de fresa</td>
                <td>Chispas de chocolate, rebanadas de fresa</td>
                <td>En proceso de entrega</td>
                <td>
                    <button id="cancelador">Cancelar Pedido</button>
                </td>
            </tr>
            <tr>
                <td>Luis Pérez</td>
                <td>perezL@gmail.com</td>
                <td>55 5462 6839</td>
                <td>Calle Sinanche, 56732, Colonia San Ángel</td>
                <td>Grande</td>
                <td>Naranja</td>
                <td>Zanahoria rayada</td>
                <td>Almendras</td>
                <td>Mousse de chocolate</td>
                <td>Rebanadas de naranja, chispas de sabores</td>
                <td>Entregado</td>
                <td>
                    <button id="cancelador">Cancelar Pedido</button>
                </td>
            </tr>
        </table><br>
        <hr>
    </div>
    <br><br>

    <div class="saboresAdornos">
        <br><br>
        <h1>Sabores Y Adornos</h1><br>
        <br>
        <h2>Sabores Restantes</h2><br>
        <hr><br>
        <table>
            <tr>
                <div class="alinearTitulos">
                    <th>Sabor</th>
                    <th>Total</th>
                    <th>Solicitado</th>
                    <th>Restante</th>
                    <th>Estatus de sabor</th>
                    <th>Opciones</th>
                </div>
            </tr>
            <tr>
                <div class="alinearRenglon">
                    <td class="justificadoIzquierda">Fresa</td>
                    <td>
                        <div>
                            {{$store.state.totalFresa}}
                        </div>
                    </td>
                    <td>
                        <div>
                            {{$store.state.solicitadoFresa}}
                        </div>
                    </td>
                    <td>
                        <div>
                            {{$store.state.restanteFresa}}
                        </div>
                    </td>
                    <td>
                        <div>
                            {{$store.state.estatusFresa}}
                        </div>
                    </td>
                    <td>
                        <button id="cancelador">Solicitar más insumos</button>
                    </td>
                </div>
            </tr>
            <tr>
                <div class="alinearRenglon">
                    <td class="justificadoIzquierda">Chocolate</td>
                        <td>
                            <div>
                                {{$store.state.totalChocolate}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.solicitadoChocolate}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.restanteChocolate}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.estatusChocolate}}
                            </div>
                        </td>
                    <td>
                        <button id="cancelador">Solicitar más insumos</button>
                    </td>
                </div>
            </tr>
            <tr>
                <div class="alinearRenglon">
                    <td class="justificadoIzquierda">Naranja</td>
                    <td>
                        <div>
                            {{$store.state.totalNaranja}}
                        </div>
                    </td>
                    <td>
                        <div>
                            {{$store.state.solicitadoNaranja}}
                        </div>
                    </td>
                    <td>
                        <div>
                            {{$store.state.restanteNaranja}}
                        </div>
                    </td>
                    <td>
                        <div>
                            {{$store.state.estatusNaranja}}
                        </div>
                    </td>
                    <td>
                        <button id="cancelador">Solicitar más insumos</button>
                    </td>
                </div>
            </tr>
            <tr>
                <div class="alinearRenglon">
                    <td class="justificadoIzquierda">Vainilla</td>
                        <td>
                            <div>
                                {{$store.state.totalVainilla}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.solicitadoVainilla}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.restanteVainilla}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.estatusVainilla}}
                            </div>
                        </td>
                    <td>
                        <button id="cancelador">Solicitar más insumos</button>
                    </td>
                </div>
            </tr>
        </table>
        <br>
        <hr>
        <br><br>

        <h2>Adornos Restantes</h2><br>
        <table>
            <tr>
                <div class="alinearTitulos">
                    <th>Sabor</th>
                    <th>Total</th>
                    <th>Solicitado</th>
                    <th>Restante</th>
                    <th>Estatus de sabor</th>
                    <th>Opciones</th>
                </div>
            </tr>
            <tr>
                <div class="alinearRenglon">
                    <td class="justificadoIzquierda">Nueces</td>
                        <td>
                            <div>
                                {{$store.state.totalNueces}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.solicitadoNueces}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.restanteNueces}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.estatusNueces}}
                            </div>
                        </td>
                    <td>
                        <button id="cancelador">Solicitar más insumos</button>
                    </td>
                </div>
            </tr>
            <tr>
                <div class="alinearRenglon">
                    <td class="justificadoIzquierda">Trozos de chocolate</td>
                        <td>
                            <div>
                                {{$store.state.totalTrozosChocolate}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.solicitadoTrozosChocolate}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.restanteTrozosChocolate}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.estatusTrozosChocolate}}
                            </div>
                        </td>
                    <td>
                        <button id="cancelador">Solicitar más insumos</button>
                    </td>
                </div>
            </tr>
            <tr>
                <div class="alinearRenglon">
                    <td class="justificadoIzquierda">Fresas frescas</td>
                        <td>
                            <div>
                                {{$store.state.totalFresaFresca}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.solicitadoFresaFresca}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.restanteFresaFresca}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.estatusFresaFresca}}
                            </div>
                        </td>
                    <td>
                        <button id="cancelador">Solicitar más insumos</button>
                    </td>
                </div>
            </tr>
            <tr>
                <div class="alinearRenglon">
                    <td class="justificadoIzquierda">Zanahoria Rayada</td>
                        <td>
                            <div>
                                {{$store.state.totalZanahoria}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.solicitadoZanahoria}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.restanteZanahoria}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.estatusZanahoria}}
                            </div>
                        </td>
                    <td>
                        <button id="cancelador">Solicitar más insumos</button>
                    </td>
                </div>
            </tr>
            <tr>
                <div class="alinearRenglon">
                    <td class="justificadoIzquierda">Almendras</td>
                        <td>
                            <div>
                                {{$store.state.totalAlmendra}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.solicitadoAlmendra}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.restanteAlmendra}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.estatusAlmendra}}
                            </div>
                        </td>
                    <td>
                        <button id="cancelador">Solicitar más insumos</button>
                    </td>
                </div>
            </tr>
            <tr>
                <div class="alinearRenglon">
                    <td class="justificadoIzquierda">Arándanos</td>
                        <td>
                            <div>
                                {{$store.state.totalArandano}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.solicitadoArandano}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.restanteArandano}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.estatusArandano}}
                            </div>
                        </td>
                    <td>
                        <button id="cancelador">Solicitar más insumos</button>
                    </td>
                </div>
            </tr>
            <tr>
                <div class="alinearRenglon">
                    <td class="justificadoIzquierda">Pasas</td>
                        <td>
                            <div>
                                {{$store.state.totalPasas}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.solicitadoPasas}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.restantePasas}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.estatusPasas}}
                            </div>
                        </td>
                    <td>
                        <button id="cancelador">Solicitar más insumos</button>
                    </td>
                </div>
            </tr>
            <tr>
                <div class="alinearRenglon">
                    <td class="justificadoIzquierda">Chispas de sabores</td>
                        <td>
                            <div>
                                {{$store.state.totalChispas}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.solicitadoChispas}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.restanteChispas}}
                            </div>
                        </td>
                        <td>
                            <div>
                                {{$store.state.estatusChispas}}
                            </div>
                        </td>
                    <td>
                        <button id="cancelador">Solicitar más insumos</button>
                    </td>
                </div>
            </tr>
        </table>
        <br>
        <hr>
        <br><br>
    </div>
</template>

<style scoped>
    button {
    cursor: pointer;
    display: inline-block;
    background: #333;
    color: white;
    font-size: 12px;
    border: 0;
    padding: 0.5rem 0.5rem;
    }

    .button:focus {
    outline: none;
    }

    .button:hover {
    transform: scale(0.98);
    }

    h1{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: white;
        display: flex;
        justify-content: flex-start;
        margin-left: 60px;
        background-color: black;
    }

    h2{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: white;
        font-size: 24px;
        text-shadow: 1px 1px 2px black;
    }

    table{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
        text-shadow: 1px 1px 2px black;
    }

    .justificadoIzquierda{
        display: flex;
        justify-content: flex-start;
    }

    .alinearTitulos{
        display: flex;
        justify-content: center;
        justify-content: space-evenly;
    }

    .alinearRenglon{
        display: flex;
        justify-content: center;
        justify-content: space-evenly;
    }

    .saboresAdornos{
        background-image: url(../assets/pastelNaranja.jpeg);
    }
</style>