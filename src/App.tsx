import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Noticia1 from './components/Noticia1/index.tsx';
import Noticia2 from './components/Noticia2/index.tsx';
import Propaganda1 from './components/Propaganda1/index.tsx';
import Propaganda2 from './components/Propaganda2/index.tsx';
import Noticia3 from './components/Noticia3/index.tsx';
import Footer from './components/Footer/index.tsx';

function App() {
  return (
      <div>
        <Container className='p-5' id="home">
        <Header />

         <div>
            <div>
                <h1 className="titulo text-center mt-5">CIENCIA E TECH</h1>
            </div>

            <div>            
                <Noticia1 />
                <Propaganda1 />
                <Noticia2 />
                <Propaganda2 />
                <Noticia3 />
            </div>
        </div>

        
      </Container>
      
      <Footer />
      </div>
  );
}

export default App;
