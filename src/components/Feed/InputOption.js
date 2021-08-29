import './InputOption.css'


const InputOption = ({Icon, text, color}) => {
  return (
    <div className="inputOption">
      {Icon && <Icon style={{color: color}} /> }
      <h4>{text}</h4>
    </div>
  )
}

export default InputOption
