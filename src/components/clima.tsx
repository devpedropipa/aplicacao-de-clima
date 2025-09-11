import { InfoAdicional } from "./info-adicional"
import { PrevisaoTempo } from "./previsao-tempo"
import { BarraPesquisa } from "./barra-pesquisa.tsx"

export function Clima() {
    return (
        <div id="clima">
            <BarraPesquisa />
            <PrevisaoTempo />
            <InfoAdicional />
            <InfoAdicional />
            <InfoAdicional />
            <InfoAdicional />
        </div>
    )
}