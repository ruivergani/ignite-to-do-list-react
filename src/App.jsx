import {v4 as uuidv4} from 'uuid';
import { Header } from "./components/Header";
import GlobalStyle from "./styles/global";
import { Input } from './components/Input';
import { Plus } from 'phosphor-react';
import { ButtonSubmit } from './components/ButtonSubmit';

// Tasks Array
const tasks = [
  { 
    id: uuidv4(),
    title: "Terminar desafio",
    isComplete: true,
  },
  { 
    id: uuidv4(),
    title: "Terminar tarefa de casa",
    isComplete: true,
  },
  { 
    id: uuidv4(),
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolore repudiandae, qui molestias laborum expedita vitae",
    isComplete: false,
  }
]

function App() {

  function handleSubmit(){

  }
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <div className="task-form">
        <form action="" onSubmit={handleSubmit}>
          <Input
            typeInput="text"
            valueInput="Add new task"
            required
          />
          <ButtonSubmit

          />
        </form>
      </div>
      
    </>
  )
}

export default App;