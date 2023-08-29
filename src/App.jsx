import {v4 as uuidv4} from 'uuid';
import { Header } from "./components/Header";
import GlobalStyle from "./styles/global";
import { Input } from './components/Input';
import { Plus } from 'phosphor-react';

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
      <form action="" onSubmit={handleSubmit}>
        <Input
          typeInput="text"
          valueInput="Add new task"
          
        />
        <button type='submit'>
          Create
          <Plus size={44} weight="bold" />
        </button>
      </form>
      
    </>
  )
}

export default App;