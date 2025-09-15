{/* Componentes */}
import { InfoAdicional } from "./info-adicional"
import { PrevisaoTempo } from "./previsao-tempo"
import { BarraPesquisa } from "./barra-pesquisa.tsx"

{/* Imagens */}
import iconeUmidade from "../assets/icone-umidade.png"
import iconeVento from "../assets/icone-vento.png"
import iconeTempMax from "../assets/icone-temp-alta.png"
import iconeTempMin from "../assets/icone-temp-baixa.png"

{/* Estilo */}
import "../styles/clima.css"

export function Clima() {
    return (
        <div id="clima">
            <BarraPesquisa />
            <PrevisaoTempo />
            <aside id="container-info-add">
                <InfoAdicional numeroInfoAddClima="12°C" nomeInfoAddClima="Temp. mínima" iconeInfoAddClima={iconeTempMin} />
                <InfoAdicional numeroInfoAddClima="13°C" nomeInfoAddClima="Temp. máxima" iconeInfoAddClima={iconeTempMax} />
                <InfoAdicional numeroInfoAddClima="30%" nomeInfoAddClima="Umidade" iconeInfoAddClima={iconeUmidade} />
                <InfoAdicional numeroInfoAddClima="2.4 KM/H" nomeInfoAddClima="Vel. do vento" iconeInfoAddClima={iconeVento} />
            </aside>
        </div>
    )
}