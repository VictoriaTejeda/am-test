import Title from "./asset/image/Title.png";
import { Characters } from "./components/Characters";
import "./style/App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <button className="favorite-btn">FAVORITOS</button>
        <button className="add-btn">AGREGAR</button>
      </header>
      <section className="main-init">
        <img src={Title} alt="logo-img" className="logo" />
        <h1 className="indication"> Selecciona tu filtro</h1>
        <section>
          <button className="studients btn btn-outline-primary">ESTUDIANTES</button>
          <button className="staff btn btn-outline-primary">STAFF</button>
        </section>
      </section>

      <Characters />
    </div>
  );
}

export default App;
