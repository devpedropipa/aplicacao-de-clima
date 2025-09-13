import iconeUmidade from "../assets/icone-umidade.png"
import "../styles/info-add.css"

interface infoAddProps {
    numeroInfoAddClima: string;
    nomeInfoAddClima: string;
}

export function InfoAdicional({numeroInfoAddClima, nomeInfoAddClima}: infoAddProps) {
    return (
        <div className="info-add">
            <img src={iconeUmidade} alt="informação adicional" className="icone-info-add" />
            <div className="dados-info-add">
                <p className="numero-info-add">{numeroInfoAddClima}</p>
                <p className="nome-info-add">{nomeInfoAddClima}</p>
            </div>
        </div>
    )
}