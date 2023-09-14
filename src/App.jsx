import { useState } from "react";
import Formulario from "./Components/Formulario";
import Perfil from "./Components/Perfil";

function App() {
  const nome = "Leandro";

  function retornaNome(){
    return nome;
  }

  const pessoa = {
    idade: 26
  }
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  return (
    <>
    <Perfil nome="Leandro" endereco="https://github.com/leandroauzier.png"/>
      <h4>Olá, {retornaNome()} Você tem {pessoa.idade} anos de idade, vamos ver sua nota:</h4>
      {formularioEstaVisivel && (
      <Formulario />
      )}
      <button onClick={() =>{setFormularioEstaVisivel(!formularioEstaVisivel)}} type="button">Toggle form</button>
    </>
  )
}

export default App
