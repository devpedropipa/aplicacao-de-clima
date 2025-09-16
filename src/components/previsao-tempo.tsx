{/* Estilo */}
import "../styles/previsao-tempo.css"

interface PropsPrevisao {
    srcIconeClima: string,
    valorTemp: string,
    valorLocal: string,
}

export function PrevisaoTempo({ valorTemp, valorLocal, srcIconeClima}: PropsPrevisao) {
    return (
        <div id="previsao-tempo">
            <img src={srcIconeClima} alt="icone de previsão do tempo" id="icone-previsao" draggable="false" />
            <h1 id="temperatura">{valorTemp}</h1>
            <h2 id="local">{valorLocal}</h2>
        </div>
    );
}
