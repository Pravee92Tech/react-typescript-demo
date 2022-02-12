type HeadingProp = {
    children : string
}

export const Heading = (props: HeadingProp) => {
  return (
      <div>
           {/* Welocme to Nested React Node Element Prop type */}
           {props.children}
      </div>
  )
};
