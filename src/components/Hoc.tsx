type HocProps ={
    children : React.ReactNode
}

export const Hoc = (props: HocProps) => {
  return (
      <div>
          {props.children}
      </div>
  )
};
