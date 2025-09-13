import iconePrevisao from "../assets/icone-nuvem.png"
import "../styles/previsao-tempo.css"

export function PrevisaoTempo() {
    return (
        <div id="previsao-tempo">
            <img src={iconePrevisao} alt="icone de previsão do tempo" id="icone-previsao" />
            <h1 id="temperatura">28°C</h1>
            <h2 id="local">Chapecó</h2>
        </div>
    );
}
