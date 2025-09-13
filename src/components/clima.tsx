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
                <InfoAdicional numeroInfoAddClima="12°C" nomeInfoAddClima="Temp. mínima" />
                <InfoAdicional numeroInfoAddClima="13°C" nomeInfoAddClima="Temp. máxima" />
                <InfoAdicional numeroInfoAddClima="30%" nomeInfoAddClima="Umidade" />
                <InfoAdicional numeroInfoAddClima="2.4km/h" nomeInfoAddClima="Vento" />
            </aside>
        </div>
    )
}