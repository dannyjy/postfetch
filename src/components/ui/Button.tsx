import type { ButtonProp } from "../../types/types"

const Button = ({ handleClick, text, color}: ButtonProp) => {
  return <button className={`border-2 ${color} px-6 py-2 font-medium rounded-xl cursor-pointer`} onClick={handleClick}>{text}</button>
}

export default Button