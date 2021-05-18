import React from "react";
import "./App.css";

function App() {
  const [items, setItems] = React.useState([]);

  function mudaEstado() {
    let novoItem = document.getElementById("newItem").value;
    setItems([...items, novoItem]);
  }

  function removeItem() {
    setItems(items.splice(1, 1));
  }

  return (
    <>
      <h1 style={{ textTransform: "uppercase" }}>
        Adicionando e removendo itens
      </h1>
      <section style={{ display: "flex" }}>
        <input
          type="text"
          style={{ width: "50%" }}
          placeholder="Adicionar Paciente"
          id="newItem"
        />
        <button onClick={mudaEstado} style={{ marginLeft: "30px" }}>
          Add
        </button>
      </section>
      <ul>
        {items.map((item) => (
          <li>
            {item}{" "}
            <button
              onClick={() => setItems(items.splice(1))}
              style={{ marginLeft: "40px" }}
            >
              Remover item
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
