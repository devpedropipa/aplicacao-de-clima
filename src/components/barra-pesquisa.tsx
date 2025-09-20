{
    /* Dependências */
}
import { useState } from "react";
import { type FormEvent } from "react";

{
    /* Imagens */
}
import iconePesquisa from "../assets/icone-pesquisar.png";
import iconeLocal from "../assets/icone-localizacao.png";

{
    /* Estilo */
}
import "../styles/barra-pesquisa.css";

{
    /* Propriedade clima */
}
export interface PropsClima {
    codClima: string;
    descricao: string;
    iconeClima: string;
    nome: string;
    temperatura: number;
    tempMax: number;
    tempMin: number;
    umidade: number;
    vento: number;
}

{
    /* Exporta a propriedade clima para outro arquivo */
}
interface PropsBarraPesquisa {
    enviarDados: (dadosEnviados: PropsClima) => void;
}

export function BarraPesquisa({ enviarDados }: PropsBarraPesquisa) {
    const [valInpPesquisa, setValInpPesquisa] = useState("");

    {
        /* Mostra o clima */
    }
    async function mostrarClima(e: FormEvent) {
        e.preventDefault();
        const dadosClima = await chamarApi();
        if (dadosClima) {
            enviarDados(dadosClima);
        }
    }

    {
        /* Chama a api e pega os dados do clima daquela localidade */
    }
    async function chamarApi() {
        const keyApi = import.meta.env.VITE_API_KEY;
        
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            valInpPesquisa
        )}&appid=${keyApi}&lang=pt_br&units=metric`;

        try {
            const response = await fetch(api);
            const dadosApi = await response.json();

            return {
                codClima: dadosApi.weather[0].icon,
                descricao: dadosApi.weather[0].description,
                iconeClima: "",
                nome: valInpPesquisa,
                temperatura: Math.round(dadosApi.main.temp),
                tempMin: dadosApi.main.temp_min,
                tempMax: dadosApi.main.temp_max,
                umidade: dadosApi.main.humidity,
                vento: dadosApi.wind.speed,
            };
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id="container-pesquisa">
            <form id="barra-pesquisa" onSubmit={mostrarClima}>
                <div id="caixa-pesquisa">
                    <img
                        src={iconeLocal}
                        alt="ícone de localização"
                        id="icone-local"
                        draggable="false"
                    />
                    <input
                        type="search"
                        id="input-pesquisa"
                        autoComplete="off"
                        onChange={(e) => {
                            setValInpPesquisa(e.target.value);
                        }}
                    />
                </div>
                <label id="botao-pesquisar">
                    {/* Não estiliza este input submit */}
                    <input type="submit" hidden />

                    <img
                        src={iconePesquisa}
                        alt="icone de pesquisa"
                        id="icone-pesquisa"
                        draggable="false"
                    />
                </label>
            </form>
        </div>
    );
}
