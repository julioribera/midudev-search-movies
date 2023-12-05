import "./App.css";
import "./Bolt.css";
import { MoviesList } from "./components/MovieList";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("Star Wars");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Buscador de películas</h1>
        <form>
          <input
            type="text"
            value={searchInput}
            placeholder="Escribe tu búsqueda..."
            onChange={handleInputChange}
          />
        </form>
      </header>
      <main>
        <MoviesList searchInput={searchInput} />
      </main>
    </div>
  );
}

export default App;
