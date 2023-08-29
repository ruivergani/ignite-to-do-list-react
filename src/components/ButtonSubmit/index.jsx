import { Plus } from "phosphor-react";
import { StyleButtonSubmit } from "./styles";

export function ButtonSubmit(){
  return(
    <StyleButtonSubmit type='submit'>
      Create
      <Plus size={16} weight="bold" />
    </StyleButtonSubmit>
  )
}