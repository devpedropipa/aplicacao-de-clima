import iconePesquisa from "../assets/icone-pesquisar.png";
import iconeLocal from "../assets/icone-localizacao.png";
import "../styles/barra-pesquisa.css";

export function BarraPesquisa() {
    return (
        <div id="container-pesquisa">
            <form id="barra-pesquisa">
                <div id="caixa-pesquisa">
                    <img
                        src={iconeLocal}
                        alt="ícone de localização"
                        id="icone-local"
                        draggable="false"
                    />
                    <input type="search" />
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
