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

{
    /* Ícones do clima */
}
import ceuLimpoDia from "../assets/icone-clima/céu-limpo-dia.png";
import ceuLimpoNoite from "../assets/icone-clima/céu-limpo-noite.png";
import chuvaDia from "../assets/icone-clima/chuva-dia.png";
import chuvaNoite from "../assets/icone-clima/chuva-noite.png";
import chuvaTorrencial from "../assets/icone-clima/chuva-torrencial.png";
import neve from "../assets/icone-clima/neve.png";
import nevoa from "../assets/icone-clima/nevoa.png";
import nuvemDispersa from "../assets/icone-clima/nuvem-dispersa.png";
import nuvemQuebrada from "../assets/icone-clima/nuvem-quebrada.png";
import poucaNuvemDia from "../assets/icone-clima/pouca-nuvem-dia.png";
import poucaNuvemNoite from "../assets/icone-clima/pouca-nuvem-noite.png";
import tempestade from "../assets/icone-clima/tempestade.png";

{
    /* Estilo */
}
import "../styles/clima.css";

export function Clima() {
    /* Entrada dos dados neste arquivo */
    const [dadosRecebidos, setDadosRecebidos] = useState<PropsClima>();

    /* Valores iniciais */
    let clima = {
        codClima: "",
        iconeClima: nuvemDispersa,
        nome: "Digite a sua localidade",
        temperatura: 0,
        tempMin: 0,
        tempMax: 0,
        umidade: 0,
        vento: 0,
    };

    /* 
        A variável clima recebe os dados
        e analisa qual é o código do ícone
        do clima para mostrar a imagem da previsão.
    */
    if (dadosRecebidos) {
        clima = dadosRecebidos;

        switch (clima.codClima) {
            case "01d":
                clima.iconeClima = ceuLimpoDia;
                break;

            case "01n":
                clima.iconeClima = ceuLimpoNoite;
                break;

            case "02d":
                clima.iconeClima = poucaNuvemDia;
                break;

            case "02n":
                clima.iconeClima = poucaNuvemNoite;
                break;

            case "03d":
            case "03n":
                clima.iconeClima = nuvemDispersa;
                break;

            case "04d":
            case "04n":
                clima.iconeClima = nuvemQuebrada;
                break;

            case "09d":
            case "09n":
                clima.iconeClima = chuvaTorrencial;
                break;

            case "10d":
                clima.iconeClima = chuvaDia;
                break;

            case "10n":
                clima.iconeClima = chuvaNoite;
                break;

            case "11d":
            case "11n":
                clima.iconeClima = tempestade;
                break;

            case "13d":
            case "13n":
                clima.iconeClima = neve;
                break;

            case "50d":
            case "50n":
                clima.iconeClima = nevoa;
                break;
        }
    }

    /* Aplicação */
    return (
        <div id="clima">
            <BarraPesquisa enviarDados={setDadosRecebidos} />
            <PrevisaoTempo
                valorLocal={clima.nome}
                valorTemp={`${clima.temperatura}°C`}
                srcIconeClima={clima.iconeClima}
            />
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
