import {v4 as uuidv4} from 'uuid';
import { Header } from "./components/Header";
import GlobalStyle from "./styles/global";
import { Input } from './components/Input';
import { Plus } from 'phosphor-react';
import { ButtonSubmit } from './components/ButtonSubmit';
import { Task } from './components/Task';

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
  // Functions
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
          <ButtonSubmit/>
        </form>
      </div>
      <div className="task-content">
        <div className="task-content-top">
          <div className="task-created">
            <p>Tasks created: <span>5</span></p>
          </div>
          <div className="task-done">
            <p>Done <span>2 of 5</span></p>
          </div>
        </div>
        <div className='task-content-bottom'>
          {
            // map the array tasks
            tasks.map(task => {
              return (
                <Task
                  key={task.id} // identifier key
                  content={task.title}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App;

// Default Export = usa a palavra default e pode ser renomeado o componente na importacao
// Named Exports = nao usa a palavra default e nao pode ser renomeado o componente