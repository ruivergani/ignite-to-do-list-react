/* eslint-disable react/prop-types */
import {StyleInput} from './styles';
// Component Input
export function Input({nameInput,typeInput, valueInput, placeholderInput, onChangeInput}){
  return(
    <StyleInput
      type={typeInput}
      name={nameInput}
      value={valueInput}
      placeholder={placeholderInput}
      onChange={onChangeInput}
    >
    </StyleInput>
  )
}