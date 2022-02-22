import Title from "./asset/image/Title.png";
import { ButtonHeader } from "./components/ButtonHeader";
import { Characters } from "./components/Characters";
import { ButtonFilter } from "./components/ButtonFilter";
import { useGetCharacters } from './hooks/useGetCharacters';
import "./style/App.scss";

function App() {
  const characters =useGetCharacters();
  return (
    <div className="App">
      <ButtonHeader/>
      <section className="main-init">
        <img src={Title} alt="logo-img" className="logo" />
        <h1 className="indication"> Selecciona tu filtro</h1>
        <ButtonFilter/>
      </section>
      <Characters characters={characters}/>
    </div>
  );
}

export default App;
