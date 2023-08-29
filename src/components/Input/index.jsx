/* eslint-disable react/prop-types */
import {StyleInput} from './styles';
// Component Input
export function Input({typeInput, valueInput, setInputValue,}){
  return(
    <StyleInput
      type={typeInput}
      value={valueInput}
      onChange={(event) => setInputValue(event.target.value)}
    >
    </StyleInput>
  )
}