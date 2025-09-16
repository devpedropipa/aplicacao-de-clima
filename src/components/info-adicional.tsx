{/* Estilo */}
import "../styles/info-add.css"

interface PropsInfoAdd {
    numeroInfoAddClima: string;
    nomeInfoAddClima: string;
    iconeInfoAddClima: string;
}

export function InfoAdicional({numeroInfoAddClima, nomeInfoAddClima, iconeInfoAddClima}: PropsInfoAdd) {
    return (
        <div className="info-add">
            <img src={iconeInfoAddClima} alt="informação adicional" className="icone-info-add" draggable="false" />
            <div className="dados-info-add">
                <p className="numero-info-add">{numeroInfoAddClima}</p>
                <p className="nome-info-add">{nomeInfoAddClima}</p>
            </div>
        </div>
    )
}