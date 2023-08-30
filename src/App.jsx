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

  // Functions
  function handleCreateNewTask(event){
    event.preventDefault(); // prevent form going to another with data
    //console.log(event.target.taskInputText.value) // get the value from the input
    setTask([...tasks, {id: uuidv4(), title: newTaskText, isComplete: false}]);
    setNewTaskText(''); // clear text input
  } 
  function handleNewTaskChange(event){
    event.target.setCustomValidity(''); // set default input error (clean error validity message)
    setNewTaskText(event.target.value) // nao precisa do name mais (pode ser direto)
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
            onChangeInput={handleNewTaskChange}
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
              <span>
                2 of 5
              </span>
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
                  content={item.title}
                  checked={item.isComplete}
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