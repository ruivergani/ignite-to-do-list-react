/* eslint-disable react/prop-types */
import { Trash } from 'phosphor-react';
import { StyleButtonTrash, StyleInputCheckbox, StyleParagraph, StyleTask, StyleTaskDiv } from './styles';

export function Task({content, checked}){
  // Functions
  function handleDeleteTask(){
    console.log('delete')
  }
  return(
    <StyleTask>
      <StyleTaskDiv>
        <StyleInputCheckbox
          type="checkbox"
          value={checked}
        />
        <StyleParagraph className={checked ? 'line' : ''}>
          {content}
        </StyleParagraph>
      </StyleTaskDiv>
      <StyleButtonTrash title='Delete Comment' onClick={handleDeleteTask}>
        <Trash size={20}></Trash>
      </StyleButtonTrash>
    </StyleTask>
  )
}