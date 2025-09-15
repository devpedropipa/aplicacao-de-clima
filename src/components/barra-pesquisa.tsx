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

export function BarraPesquisa() {
    const [valInpPesquisa, setValInpPesquisa] = useState("");

    {
        /* Chama a api e pega os dados do clima daquela localidade */
    }
    async function chamarApi() {
        const keyApi = "40ab9d36abc590d5b2357c091828ea10";
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            valInpPesquisa
        )}&appid=${keyApi}&lang=pt_br&units=metric`;

        try {
            const response = await fetch(api);
            const dadosApi = await response.json();

            return {
                iconeClima: `https://openweathermap.org/img/wn/${dadosApi.weather[0].icon}.png`,
                nome: valInpPesquisa,
                temperatura: dadosApi.main.temp,
                tempMin: dadosApi.main.temp_min,
                tempMax: dadosApi.main.temp_max,
                umidade: dadosApi.main.humidity,
                vento: dadosApi.wind.speed,
            };
        } catch (error) {
            console.log(error);
        }
    }

    {
        /* Mostra o clima */
    }
    async function mostrarClima(e: FormEvent) {
        e.preventDefault();
        const clima = await chamarApi();
        console.log(clima)
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
                        required
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
