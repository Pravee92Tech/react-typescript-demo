type ButtonProps ={
    handleClick: () => void
}

export const Button = (props: ButtonProps) => {
  return (
      <div>
          <button onClick={props.handleClick} className="ny-button">Click</button>
      </div>
  )
};
