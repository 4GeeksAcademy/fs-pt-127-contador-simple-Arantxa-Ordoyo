import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from './components/SecondsCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Inicializamos el contador para que empiece en 0 y interval mejor empezar con null para decirle que no esta activo porque si ponemos 0 el id podria ser 0 y crear confusion
let seconds = 0;
let interval = null;

//setInterval es las veces que quiero que se vaya ejecutando la funcion y clearInterval le digo que pare de ejecutarla
//Empezamos con la funcion de play, limpiamos el intervalo, y le decimos que nos vaya aumentando los segundos de uno en uno
//luego hacemos render y llamamos a la pagina del SecondsCountes y cogemos la funcion con los divs y los botones
function startContador() {
    clearInterval(interval);
    interval = setInterval(() => {
        seconds++;
        root.render(<>
            <SecondsCounter seconds={seconds}
                parar={stopContador}
                reanudar={startContador}
                restar={reverseContador} />
        </>
        );
    }, 1000);
}
//Aqui solamente le decimos que detenga el intervalo es decir interval guarda el id del intervalo y clearInterval lo detiene para que no siga ejecutandose
function stopContador() {
    clearInterval(interval);
    root.render(
        <SecondsCounter
            seconds={seconds}
            parar={stopContador}
            reanudar={startContador}
            restar={reverseContador}
        />
    );
}
//Hacemos lo mismo que en start pero restando
function reverseContador() {
    clearInterval(interval);
    interval = setInterval(() => {
        seconds--;
        root.render(
            <SecondsCounter
                seconds={seconds}
                parar={stopContador}
                reanudar={startContador}
                restar={reverseContador}
            />
        );
    }, 1000);
}
//llamamos a la funcion start para que empiece de 0
startContador();
