import './App.css';
// import { Button } from './components/Button';
// import { ChildrenPropsComponent } from './components/ChildrenPropsComponent';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
// import { Heading } from './components/Heading';
// import { Hoc } from './components/Hoc';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
 import { Status } from './components/Status';
import { MainLayout } from './layout/MainLayout';

function App() {
 

  // const nameList = [
  //   {
  //     first: 'Praveen',
  //     last: 'Kalyan'
  //   },
  //   {
  //     first: 'Priya',
  //     last: 'Prakash'
  //   },
  //   {
  //     first: 'Pradeepa',
  //     last: 'Bala'
  //   },
  //   {
  //     first: 'Vignesh',
  //     last: 'Karnan'
  //   },
  //   {
  //     first: 'Vignesh',
  //     last: 'Dinakaran'
  //   }

  // ];

  // const personName = {
  //   firstName: 'Praveen',
  //   lastName: 'Kalyan'
  // }
  return (
    <div className="App">

      {/* Basic Props */}
      {/* <Greet name="Viggfgfnbgjgfgnesh!" messageCount={100} isLogedIn={true}  /> */}
      {/* <Greet name="Vignesh!" messageCount={106}  isLogedIn={true}  /> */}

      {/* object */}
      {/* <Person name={personName} /> */}

      {/* array */}
      {/* <PersonList names={nameList} /> */}

      {/* <div class="class-name">
      </div> */}

      {/* Union Literals of string */}
      {/* <Status status='error' />
      <Status status='success' />
      <Status status='loading' /> */}

      {/* passing component content */}
      {/* <ChildrenPropsComponent>Hi I'm children prop sample</ChildrenPropsComponent> */}

      {/* passing component content */}
      {/* <Heading> Test it again </Heading> */}

      {/* calling child components */}
      {/* <Hoc>
        <Heading> Called From HOC </Heading>
      </Hoc> */}
      {/* optionalProps */}
      {/* <Greet name="Praveen!!!" messageCount={10} isLogedIn={true} ></Greet> */}
      {/* <Greet name="Praveen!!!" isLogedIn={true} ></Greet> */}

      {/* Button */}

      {/* <Button handleClick={() => {
        console.log('Button Clicked');
      }}></Button> */}

      <MainLayout></MainLayout>

    </div>
  );
}

export default App;
