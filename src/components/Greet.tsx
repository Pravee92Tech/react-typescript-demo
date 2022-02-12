import '../App.css'


type GreetProps = {
    name: string
    messageCount?: number
    isLogedIn: boolean
}

// Es6 Component syntax
export const Greet = (props: GreetProps) => {
    // var employee ={
    //     name: 'Pravee',
    //     age: 29,
    //     native: 'MYL'
    // }

    // let name = employee.name;
    // console.log(name)

    // const {name, age, native} = employee;

    // console.log(name, age)

    // Es6 Destructuring
    const { messageCount = 0, name, isLogedIn } = props;

    return (
        <div className="header-greet">
            <h2>
                {
                    isLogedIn ? `Welcome ${name} You have ${messageCount} text messages`
                        : 'Welcome Guest'
                }
            </h2>
        </div>
    );
}

// default Greet;