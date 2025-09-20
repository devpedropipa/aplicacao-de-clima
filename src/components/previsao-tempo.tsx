{/* Estilo */}
import "../styles/previsao-tempo.css"

interface PropsPrevisao {
    srcIconeClima: string,
    valorTemp: string,
    valorLocal: string,
    descricaoPrevisao: string,
}

export function PrevisaoTempo({ valorTemp, valorLocal, srcIconeClima, descricaoPrevisao}: PropsPrevisao) {
    return (
        <div id="previsao-tempo">
            <abbr title={descricaoPrevisao}><img src={srcIconeClima} alt="icone de previsão do tempo" id="icone-previsao" draggable="false" /></abbr>
            <h1 id="temperatura">{valorTemp}</h1>
            <h2 id="local">{valorLocal}</h2>
        </div>
    );
}
