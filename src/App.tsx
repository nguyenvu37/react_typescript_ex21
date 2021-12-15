import './App.css';
import { Box } from './components/Context/Box';
import { ThemeContextProvider } from './components/Context/ThemeContext';
import { User } from './components/Context/User';
import { UserContextProvider } from './components/Context/UserContext';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Main } from './components/Main';
import Person from './components/Person';
import { PersonList } from './components/PersonList';
import { MutableRef } from './components/Ref/MutableRef';
import { Counter } from './components/StateComponents/Counter';
import { LoggedIn } from './components/StateComponents/LoggedIn';
import { Status } from './components/Status';
import { Container } from './components/StyleProp/Container';
import { Button } from './components/UltilComponents/Button';
import { Input } from './components/UltilComponents/Input';
import { Separator } from './components/UltilComponents/Separator';

function App() {
  const personName = {
    first: 'Nguyen',
    last: 'Anh Vu',
  };

  const nameList = [
    {
      first: 'Nguyen',
      last: 'Van A',
    },
    {
      first: 'Nguyen',
      last: 'Van B',
    },
    {
      first: 'Nguyen',
      last: 'Van C',
    },
  ];

  return (
    <div className="App">
      <Greet name={'Anhvu'} age={27} isLoggedIn />
      <Person name={personName} />
      {/* Array props */}
      <PersonList name={nameList} />
      <Status status="success" />
      {/* Advanced props */}
      <Main>
        <Heading>
          <h2>Props with children props</h2>
        </Heading>
      </Main>
      {/* End Advanced props */}

      {/* Event props */}
      <div className="event-props">
        <Separator content="Event props" />
        <Button
          handleClick={(event) =>
            console.log('Button clicked', event)
          }
        />
        <Input value="a" />
      </div>
      {/* End Advanced props */}

      {/* Style props */}
      <div className="style-props">
        <Separator content="Style props" />
        <Container
          styles={{
            border: '1px solid pink',
            padding: '1rem',
            width: '20%',
            backgroundColor: 'pink',
            color: '#fff',
            margin: '0 auto',
          }}
        />
      </div>
      {/* End Style props */}

      {/* Handle State with useState */}
      <div className="state">
        <Separator content="Handle State with useState" />
        <LoggedIn />
      </div>
      {/* End Handle State with useState */}

      {/* Handle state with useReducer */}
      <div className="reducer">
        <Separator content="Handle state with useReducer" />
        <Counter />
      </div>
      {/* End handle state with useReducer */}

      {/* useContext with typescript */}
      <div className="context">
        <Separator content="Theme Context using useContext" />
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
        <UserContextProvider>
          <User />
        </UserContextProvider>
      </div>
      {/* End useContext with typescript */}

      {/* useRef with typescript */}
      <div className="ref">
        <Separator content="useRef with typescript" />
        <MutableRef />
      </div>
      {/* End useRef with typescript */}
    </div>
  );
}

export default App;
