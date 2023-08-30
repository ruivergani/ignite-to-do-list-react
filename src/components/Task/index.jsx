import { Trash } from 'phosphor-react';
import { StyleButtonTrash, StyleInputCheckbox, StyleParagraph, StyleTask, StyleTaskDiv } from './styles';

export function Task({content}){
  return(
    <StyleTask>
      <StyleTaskDiv>
        <StyleInputCheckbox
          type="checkbox"
          value="true"
        />
        <StyleParagraph>{content}</StyleParagraph>
      </StyleTaskDiv>
      <StyleButtonTrash title='Delete Comment'>
        <Trash size={20}></Trash>
      </StyleButtonTrash>
    </StyleTask>
  )
}