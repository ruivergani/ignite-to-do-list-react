import { Trash } from 'phosphor-react';
import { StyleButtonTrash, StyleInputCheckbox, StyleParagraph, StyleTask } from './styles';

export function Task(){
  return(
    <StyleTask>
      <StyleInputCheckbox
        type="checkbox"
        value="true"
      />
      <StyleParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit.</StyleParagraph>
      <StyleButtonTrash title='Delete Comment'>
        <Trash size={20}></Trash>
      </StyleButtonTrash>
    </StyleTask>
  )
}