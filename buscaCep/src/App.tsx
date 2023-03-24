import { FiSearch } from 'react-icons/fi';
import './style.css';

function App() {
  return (
    <div className="container">
      <div className='title'>
        <h1>Buscador de CEP</h1>
      </div>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>

      </div>
      <main className='main'>
          <h2>CEP: 0021342145</h2>

          <span>Rua Arlindo Souza</span>
          <span>Complemento: APto 1023</span>
          <span>Vila Mendes</span>
          <span>Londrina - PR</span>

        </main>
    </div>
  );
}

export default App;
