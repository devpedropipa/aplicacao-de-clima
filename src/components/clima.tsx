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

export function Clima() {
    const [dadosRecebidos, setDadosRecebidos] = useState<PropsClima>();
    let clima = {
        iconeClima: iconeNuvem,
        nome: "Digite a sua localidade",
        temperatura: 0,
        tempMin: 0,
        tempMax: 0,
        umidade: 0,
        vento: 0,
    };
    
    if (dadosRecebidos) {
        clima = dadosRecebidos;
        console.log(clima);
    } else {
        console.log(clima)
    }

    return (
        <div id="clima">
            <BarraPesquisa enviarDados={setDadosRecebidos} />
            <PrevisaoTempo valorLocal={clima.nome} valorTemp={`${String(clima.temperatura)}°C`} srcIconeClima={clima.iconeClima} />
            <aside id="container-info-add">
                <InfoAdicional
                    numeroInfoAddClima={`${clima.tempMin}°C`}
                    nomeInfoAddClima="Temp. mínima"
                    iconeInfoAddClima={iconeTempMin}
                />
                <InfoAdicional
                    numeroInfoAddClima={`${clima.tempMax}°C`}
                    nomeInfoAddClima="Temp. máxima"
                    iconeInfoAddClima={iconeTempMax}
                />
                <InfoAdicional
                    numeroInfoAddClima={`${clima.umidade}°C`}
                    nomeInfoAddClima="Umidade"
                    iconeInfoAddClima={iconeUmidade}
                />
                <InfoAdicional
                    numeroInfoAddClima={`${clima.vento} KM/H`}
                    nomeInfoAddClima="Vel. do vento"
                    iconeInfoAddClima={iconeVento}
                />
            </aside>
        </div>
    );
}
