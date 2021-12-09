import './App.css';
import { Greet } from './components/Greet';
import Person from './components/Person';
import { PersonList } from './components/PersonList';

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
    <div className='App'>
      <Greet name={'Anhvu'} age={27} isLoggedIn />
      <Person name={personName} />
      <PersonList name={nameList} />
    </div>
  );
}

export default App;
