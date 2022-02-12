type ChildrenPropsComponentProps = {
  children: string
}

export const ChildrenPropsComponent = (props: ChildrenPropsComponentProps) => {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  )
};
