import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default function SecondsCounter({ seconds, parar, restar, reanudar }) {
    //pasamos la variable segundo a string y el padStart te rellena con 0 desde la izquierda hasta el numero de tu variable
    //  y el 6 le indicamos cuantas posiciones queremos
    let contador = seconds.toString().padStart(6, "0");
    //separamos la variable contador numero por numero.
    let separadorContador = contador.split("");
    //Hacemos el return para devolver un HTML
    return (
        <>
            <div className="bg-black text-white  d-flex justify-content-center"  >
                <div className="bg-dark  d-flex justify-content-center align-items-center mx-1 my-3 shadow p-3  rounded">
                    {/* Añadimos el icono del reloj*/}
                    <FontAwesomeIcon icon={faClock} />
                </div>
                { /*con el map recorremos la variable y le damos un div para cada una y luego la mostramos dentro la key es importante para identificarlo de forma unica*/
                    separadorContador.map((numeroContador, index) => {
                        return (
                            <div key={index} className="bg-dark d-flex justify-content-center align-items-center  mx-1 my-3 shadow p-3   rounded">
                                <h2 >{numeroContador}</h2>
                            </div>
                        )
                    })}
            </div>
            {/*Creamos botones para poder para restar o volver a activar el contador y con el onclick le pasamos la variable
             que luego en el main haremos la funcion */ }
            <button type="button" class="btn btn-primary" onClick={parar}>Parar</button>
            <button type="button" class="btn btn-primary" onClick={restar}>Restar</button>
            <button type="button" className="btn btn-success" onClick={reanudar}>Reanudar</button>
        </>

    )
}
