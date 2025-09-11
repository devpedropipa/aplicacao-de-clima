import iconeUmidade from "../assets/icone-umidade.png"

export function InfoAdicional() {
    return (
        <div className="info-add">
            <img src={iconeUmidade} alt="informação adicional" className="icone-info-add" />
            <p className="porcent-info-add">79%</p>
            <p className="nome-info-add">umidade</p>
        </div>
    )
}