import { Container } from "react-bootstrap";
import "./styles.css"

export default function Noticia3(){
    return (
        <Container id="noticia3">
            <h1 className="titulo text-center">Exército e Governo de São Paulo firmam parceria em Ciência, Tecnologia e Inovação</h1>

            <div className="containerInovacao">
                <div>
                    <img src="https://images.pexels.com/photos/30179028/pexels-photo-30179028/free-photo-of-arquitetura-do-congresso-nacional-brasileiro.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>

                <div >
                    <p className="texto">
                    Brasília (DF) - O Exército Brasileiro, por intermédio do Departamento de Ciência e Tecnologia (DCT), e o Governo do Estado de São Paulo firmaram, no dia 12 de março, um protocolo de intenções com o objetivo de fortalecer e expandir as parcerias nas áreas de Ciência, Tecnologia e Inovação. A iniciativa visa a criação de um ambiente colaborativo para o desenvolvimento de projetos que envolvem tanto o setor público quanto o setor militar, alinhando os interesses institucionais e as políticas nacionais de defesa.
                    </p>

                    <p className="texto">
                    Além da assinatura do protocolo de intenções, foi realizada uma reunião entre o Departamento de Ciência e Tecnologia (DCT) e a Casa Civil do Estado de São Paulo, representada por seu Secretário Executivo, Fraide Sales. O encontro contou com a participação da alta cúpula da área de Ciência e Tecnologia do Estado, incluindo o Secretário de Ciência, Tecnologia e Inovação, Prof. Dr. Vahan Agopyan, os reitores das três universidades estaduais de São Paulo – Prof Dr. Carlos Gilberto Carlotti Júnior (USP), Prof. Dr. Antonio José de Almeida Meirelles (Unicamp) e Profa. Dra. Maysa Furlan (UNESP) –, além do Presidente do Instituto de Pesquisas Tecnológicas, Prof. Dr. Anderson Correia, e do Presidente da FAPESP, Prof. Dr. Marco Antônio Zago. Também estiveram presentes o Gen Div Armando Morado Ferreira, Chefe de Ensino, Pesquisa, Desenvolvimento e Inovação do DCT, o Gen Div Juraci Ferreira Galdino, Comandante e Reitor do Instituto Militar de Engenharia, e diversas autoridades civis e militares da área de Ciência e Tecnologia do Exército e do Estado de São Paulo. Entre as iniciativas de pesquisa e inovação na região, há o planejamento para a implantação de um Centro Tecnológico em Defesa no Estado, a aceleração de Pesquisa e Desenvolvimento de tecnologias disruptivas, a exploração da dualidade tecnológica e a realização de pesquisas voltadas ao planejamento de longo prazo do Exército (Força 40).
                    </p>

                    <p className="texto">A assinatura do protocolo de intenções ocorreu durante reunião realizada no Palácio dos Bandeirantes, sede do governo paulista, e que contou com a participação do Governador Tarcísio de Freitas e do General de Exército Achilles Furlan Neto, chefe do DCT. No documento assinado, as partes envolvidas se comprometem a realizar estudos conjuntos, focados no avanço tecnológico e na inovação, com base nas diretrizes estabelecidas pela Política Nacional de Defesa, pela Estratégia Nacional de Defesa, além de outras normas e acordos previamente definidos, como a Política de Propriedade Intelectual do Ministério da Defesa e a Política Militar Terrestre.</p>
                </div>
            </div>
        </Container>
    )
}