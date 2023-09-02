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
    setTask([...tasks, {id: uuidv4(), title: newTaskText, isComplete: newIsComplete}]);
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
        item.isComplete = !item.isComplete; // Inverte o valor atual de isComplete
        setNewIsComplete(!item.isComplete); // Atualiza o estado newIsComplete com base na tarefa atual
        console.log(`Tarefa com ID ${item.id} foi alterada para isComplete=${item.isComplete}`);
      }
      setNewIsComplete(false); // set default isComplete = false
      return item; // retorna um novo array de tasks
    });
    setTask(newTasks); // Atualiza o estado tasks com o novo array de tarefas
  }

  // Reduce and Total Tasks
  const totalTasksCreated = tasks.length;
  const totalTasksDone = tasks.reduce( // iterate over tasks object
    // acc = accumulator (acumulates result as iteration happens)
    // cur = current element proccesed 
    // Number(cur.isComplete) converts the boolean isComplete property of the task to a number (0 for false and 1 for true).
    (acc, cur) => acc + Number(cur.isComplete),
    0, // valor inicial of accumulator
  );
  /* 
  The reduce method effectively sums up the values of Number(cur.isComplete) for all tasks in the array, resulting in totalTasksDone being the total number of tasks marked as done (where isComplete is true).
  */
 
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
                totalTasksCreated > 0 ? (
                <span>
                  {
                    totalTasksDone
                  }
                  &nbsp; of &nbsp; 
                  {
                    totalTasksCreated
                  }
                </span>
              ) : (
                <span>{totalTasksCreated}</span>
              )
              }
            </p>
          </div>
        </div>
        <div className='task-content-bottom'>
          {
            totalTasksCreated > 0 ? (
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