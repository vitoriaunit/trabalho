import { Container } from "react-bootstrap";
import "./styles.css"

export default function Noticia2(){
    return (
        <Container className="containerEspacoSecao1" id="noticia2">
            <h2 className="titulo">NASA lança, com sucesso, duas missões revolucionárias ao Espaço</h2>

            <div></div>

            <div>
                <p className="texto">Na madrugada desta quarta-feira (12), a NASA enviou, ao Espaço, duas missões no mesmo foguete da SpaceX, o Falcon 9. O lançamento estava originalmente programado para os primeiros minutos de sábado (8), no entanto, foi suspenso pela empresa para verificações adicionais no veículo.
                </p>

                <p className="texto">Esperava-se, então, que isso ocorresse nesta terça-feira (11), mas, segundo a SpaceX, o tempo não estava favorável e houve problema com uma das espaçonaves da NASA. O lançamento desta quarta-feira (12) foi realizado à 0h10 (horário de Brasília).</p>
            
                <p className="texto">O telescópio SPHEREx e o conjunto de satélites solares PUNCH decolaram a partir da Base da Força Espacial de Vandenberg, na Califórnia (EUA). O evento foi transmitido pela agência espacial estadunidense em seu canal no YouTube.</p>

                <p className="texto">A estratégia de compartilhamento de viagem faz parte do Programa de Serviços de Lançamentos da NASA, que busca otimizar custos ao combinar diferentes missões científicas em um único foguete. Isso permite dividir os gastos entre a verba do governo dos EUA e o dinheiro de empresas privadas, ampliando as oportunidades para a exploração espacial.</p>
            </div>

            <img src="https://images.pexels.com/photos/60130/pexels-photo-60130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="spaceX" width={450}/>
        </Container>
    )
}