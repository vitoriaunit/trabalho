import { Container } from "react-bootstrap";
import './styles.css'

export default function Noticia1(){
    return (
        <div>

          <Container className="mt-5" id="noticia1">
            <div>
              <h2 className="titulo text-center">Texas Instruments anuncia o menor microcontrolador do mundo</h2>

              {/* SEÇÃO 1 */}
              <div className="containerMicrocontroladorSecao1">
                <div>
                  <div className="containerMicrocontroladorSecao1Titulo">
                    <p className="texto containerMicrocontroladorSecao1TituloData">13-03-2025</p>
                    <p className="titulo">Do tamanho de um grão de arroz</p>
                  </div>
                  <div>
                    <p className="containerMicrocontroladorSecao1Texto">A Texas Instruments anunciou um feito histórico: a criação do menor microcontrolador (MCU) do mundo, medindo apenas 1,38 mm², tão pequeno quanto um grão de arroz. </p>                  
                  </div>                
                    
                  </div>
                  
                  <div>
                    <img src="https://media.istockphoto.com/id/639573858/pt/foto/tecnologia-de-comunica%C3%A7%C3%A3o.jpg?s=1024x1024&w=is&k=20&c=XzYyN-je6A69H95AGz1W8N7FU2CFfIlIeKwzv1hEugE=" width={450}/>
                  </div>
              </div>

              {/* SEÇÃO 2 */}
              <div className="containerMicrocontroladorSecao2">                  
                  <img src="https://t.ctcdn.com.br/gu6-77yZq6pzYLYVQ6F0VBKVx5c=/768x432/smart/i989113.png" alt="microcontrolador" width={450}/>
                  
                  <div>
                    <h3 className="titulo">Sobre a empresa Texas Instruments</h3>   

                    <p>fundada em 1930 e com sede em Dallas, Texas, é uma das maiores e mais influentes empresas de tecnologia do mundo. Reconhecida globalmente por sua expertise em semicondutores, a TI desenvolve e fabrica componentes essenciais utilizados em dispositivos eletrônicos, desde smartphones até sistemas automotivos e industriais.
                    Além de ser uma líder na criação de circuitos integrados e microchips, a TI também é amplamente conhecida por suas calculadoras científicas e gráficas, como a famosa linha TI-84, que se tornou um item indispensável em escolas e universidades ao redor do mundo.</p>   

                    <a href="https://www.ti.com/about-ti/company/who-we-are.html">https://www.ti.com/about-ti/company/who-we-are.html</a>
                  </div>
              </div>
            </div>
          </Container>
        </div>
    )
}