import iconePesquisa from "../assets/icone-pesquisar.png";
import iconeLocal from "../assets/icone-localizacao.png";
import "../styles/barra-pesquisa.css";

export function BarraPesquisa() {
    return (
        <div id="barra-pesquisa">
            <form id="container-pesquisa">
                <div>
                    <img
                        src={iconeLocal}
                        alt="ícone de localização"
                        id="icone-local"
                    />
                    <input type="search" id="caixa-pesquisa" />
                </div>
                <label>
                    {/* Não estiliza este input submit */}
                    <input type="submit" hidden />

                    <img
                        src={iconePesquisa}
                        alt="icone de pesquisa"
                        id="icone-pesquisa"
                    />
                </label>
            </form>
        </div>
    );
}
