import todoLogo from '../../assets/logos/logo-todo.svg';
import { StyleHeader } from './styles'; // importing all styled-components

// Header Component
export function Header (){
  return (
    <StyleHeader>
      <div className="container">
        <img src={todoLogo} alt="Logo To Do" />
      </div>
    </StyleHeader>
  )
}