import { useState } from "react";

{
    /* Componentes */
}
import { InfoAdicional } from "./info-adicional";
import { PrevisaoTempo } from "./previsao-tempo";
import { BarraPesquisa, type PropsClima } from "./barra-pesquisa.tsx";

{
    /* Imagens */
}
import iconeUmidade from "../assets/icone-umidade.png";
import iconeVento from "../assets/icone-vento.png";
import iconeTempMax from "../assets/icone-temp-alta.png";
import iconeTempMin from "../assets/icone-temp-baixa.png";
import iconeNuvem from "../assets/icone-nuvem.png"

{
    /* Estilo */
}
import "../styles/clima.css";

export function Clima({
    iconeClima = iconeNuvem,
    nome = "Digite a sua localidade",
    temperatura = Number(0),
    tempMax = Number(0),
    tempMin = Number(0),
    umidade = Number(0),
    vento = Number(0),
}: PropsClima) {
    const [clima, setClima] = useState<PropsClima | null>();
    if (clima && clima.nome) {
        iconeClima = clima.iconeClima
        nome = clima.nome
        temperatura = Number(clima.temperatura)
        tempMax = Number(clima.tempMax)
        tempMin = Number(clima.tempMin)
        umidade = Number(clima.umidade)
        vento = Number(clima.vento)
    }

    return (
        <div id="clima">
            <BarraPesquisa enviarDados={setClima} />
            <PrevisaoTempo valorLocal={nome} valorTemp={`${String(temperatura)}°C`} srcIconeClima={iconeClima} />
            <aside id="container-info-add">
                <InfoAdicional
                    numeroInfoAddClima={`${String(tempMin)}°C`}
                    nomeInfoAddClima="Temp. mínima"
                    iconeInfoAddClima={iconeTempMin}
                />
                <InfoAdicional
                    numeroInfoAddClima={`${String(tempMax)}°C`}
                    nomeInfoAddClima="Temp. máxima"
                    iconeInfoAddClima={iconeTempMax}
                />
                <InfoAdicional
                    numeroInfoAddClima={`${String(umidade)}%`}
                    nomeInfoAddClima="Umidade"
                    iconeInfoAddClima={iconeUmidade}
                />
                <InfoAdicional
                    numeroInfoAddClima={`${String(vento)} KM/H`}
                    nomeInfoAddClima="Vel. do vento"
                    iconeInfoAddClima={iconeVento}
                />
            </aside>
        </div>
    );
}
