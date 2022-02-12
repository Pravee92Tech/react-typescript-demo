// type PersonProps = {
//     name: {
//         first: string
//         last: string
//     }
// }


// export const Person = (props: PersonProps) =>{
//     return (<div>'First name :' {props.name.first}  '& Last name: ' {props.name.last}</div>);
// }

type PersonProps = {
    name:{
        firstName: string
        lastName: string
    }
}

export const Person = (props: PersonProps) => {

    const {firstName, lastName} = props.name;

    return (
        <div> {`Welcome ${firstName} ${lastName}, to learn Viprant Typescript`}</div>
    )
}