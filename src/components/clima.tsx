import { InfoAdicional } from "./info-adicional"
import { PrevisaoTempo } from "./previsao-tempo"
import { BarraPesquisa } from "./barra-pesquisa.tsx"
import "../styles/clima.css"

export function Clima() {
    return (
        <div id="clima">
            <BarraPesquisa />
            <PrevisaoTempo />
            <aside id="container-info-add">
                <InfoAdicional />
                <InfoAdicional />
                <InfoAdicional />
                <InfoAdicional />
            </aside>
        </div>
    )
}