/* eslint-disable no-unused-vars */
import {v4 as uuidv4} from 'uuid';
import { Header } from "./components/Header";
import GlobalStyle from "./styles/global";
import { Input } from './components/Input';
import { ClipboardText, Plus } from 'phosphor-react';
import { ButtonSubmit } from './components/ButtonSubmit';
import { Task } from './components/Task';
import { useState } from 'react';

// Tasks Array
// const tasks = [
//   { 
//     id: uuidv4(),
//     title: "Terminar desafio",
//     isComplete: true,
//   },
//   { 
//     id: uuidv4(),
//     title: "Terminar desafio 02",
//     isComplete: false,
//   },
// ]

function App() {
  // State
  const [tasks, setTask] = useState([])
  const [newTaskText, setNewTaskText] = useState('')
  const [newIsComplete, setNewIsComplete] = useState(false)

  // Functions
  function handleCreateNewTask(event){
    event.preventDefault(); // prevent form going to another with data
    //console.log(event.target.taskInputText.value) // get the value from the input
    setTask([...tasks, {id: uuidv4(), title: newTaskText, isComplete: false}]);
    setNewTaskText(''); // clear text input
  } 
  function handleNewTaskChecked(event){
    event.target.setCustomValidity(''); // set default input error (clean error validity message)
    setNewTaskText(event.target.value) // nao precisa do name mais (pode ser direto)
  }
  function deleteTask(taskToDeleteId){
    // Imutabilidade => 
    // Procurar no array tasks uma task com mesmo ID da que foi passado como parametro
    const tasksWithoutDeletedOne = tasks.filter(task => { // filter => true (stays) - false (leave)
      return task.id !== taskToDeleteId; // retorna todas as tasks que for diferente da task para deletar
    });
    setTask(tasksWithoutDeletedOne);
  }
  function changeTask(taskToChangeId){
    // Procurar no array tasks com mesmo ID que foi passado como parametro
    const newTasks = tasks.map(item => {
      if(item.id === taskToChangeId){
        setNewIsComplete(item.isComplete = !newIsComplete);  // Inverte o valor atual do estado newIsComplete
        //console.log(`Tarefa com ID ${item.id} foi alterada para isComplete=${item.isComplete}`);
      }
      return item; // retorna um novo array de tasks
    });
    setTask(newTasks); // Atualiza o estado tasks com o novo array de tarefas

    /* 
      Importante o conceito de imutabilidade, nao alterar array mas sim criar um novo
      Tambem e importante pensar que se o isComplete nao for um estado, quando alterar seu valor o componente nao vai renderizar de novo => logo nao e possivel riscar a linha <p> com uma classe ('line')
    */
  }
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <div className="task-form">
        <form onSubmit={handleCreateNewTask}>
          <Input
            nameInput='taskInputText'
            typeInput='text'
            onChangeInput={handleNewTaskChecked}
            placeholderInput="Add new task"
            valueInput={newTaskText} // valor do text input (assim consegue deixar vazio apos criar nova task)
            required
          />
          <ButtonSubmit/>
        </form>
      </div>
      <div className="task-content">
        <div className="task-content-top">
          <div className="task-created">
            <p>Tasks created: 
              <span>
                {
                  tasks.length
                }
              </span>
            </p>
          </div>
          <div className="task-done">
            <p>Done
              {
                tasks.length > 0 ? (
                <span>
                  {
                    // Reducer
                  }
                  2 
                  of &nbsp; 
                  {
                    tasks.length
                  }
                </span>
              ) : (
                <span>{tasks.length}</span>
              )
              }
            </p>
          </div>
        </div>
        <div className='task-content-bottom'>
          {
            tasks.length > 0 ? (
            // map the array tasks
            tasks.map(item => {
              return (
                <Task
                  key={item.id} // identifier key
                  id={item.id} // identifier id
                  content={item.title}
                  checked={item.isComplete}
                  onDeleteTask={deleteTask} // use function as props to delete task
                  onChangeTask={changeTask} // use function as props to change the isComplete from the task
                />
              )
            })
            ) : (
              // empty task
              <div className="empty-task">
                <ClipboardText size={56}/>
                <h3 className="empty-task-text">
                  <span>You do not have any tasks created</span>
                  <br/>
                  Create tasks and organise your things to do
                </h3>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App;

// Default Export = usa a palavra default e pode ser renomeado o componente na importacao
// Named Exports = nao usa a palavra default e nao pode ser renomeado o componente