import React from 'react';
import ListarTarefa from './components/listar-tarefa.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ListarTarefaConcluidas from './components/listar-concluidas-tarefa.tsx';

function App() {
  return (
    <div >
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>HOME</Link>
              </li>

              <li>
                <Link to={"/pages/produto/listar"}>
                  Listar Tarefas{" "}"
                </Link>
              </li>

              <li>
                <Link to={"/pages/produto/listarconcluidas"}>
                  Listar Tarefas Concluidas{" "}"
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<ListarTarefa />} />
            <Route
              path='/pages/tarefa/listar'
              element={<ListarTarefa />} />
            <Route
              path='"/pages/produto/listarconcluidas'
              element={<ListarTarefaConcluidas />} />
          </Routes>
          <p>Desenvolvido</p>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
