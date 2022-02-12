
// var nameList = ["asdas","asdsd"];

// var Name = [{'first': 'Pravee', "last": "Kalyan"},{'first': 'Priya', "last": "Prakash"} ]

import './PersonList.css'
type Name = {
    first: string
    last: string
}

type PersonListProps = {
    // array syntax
    names: Name[]
}

export const PersonList = (props: PersonListProps) => {

    const { names } = props;

    const isEven = (index: number) => {
        return index % 2 === 0 ? true : false;
    }

    return (
        <div>
            {/* <h2>KP</h2>
          <h2 class="jhghj">KP</h2>
          <h2>KP</h2> */}
            {
                names.map((name, index) => {
                    return (
                        <>
                            {/* <h2 className={isEven(index) ? "even" : "odd"} key={name.first}>{name.first} {name.last}</h2> */}
                            <ul>
                                <li className= {isEven(index) ? "even" : "odd"} key={name.first}>{name.first} {name.last}</li>
                            </ul>
                        </>
                    )
                })
            }
        </div>
    )
};
