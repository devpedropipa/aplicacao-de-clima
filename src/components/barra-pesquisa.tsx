import iconePesquisa from "../assets/icone-pesquisar.png";

export function BarraPesquisa() {
    return (
        <div id="barra-pesquisa">
            <form>
                <input type="search" id="caixa-pesquisa" />
                <label>
                    <input type="submit" hidden />
                    <img src={iconePesquisa} alt="icone de pesquisa" id="icone-pesquisa" />
                </label>
            </form>
        </div>
    );
}
