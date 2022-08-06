//import { Suspense } from 'react';
import './App.css';
//import Axios from './components/Axios';
//import Fetch from './components/Fetch';
//import Swr from './components/Swr';
import ReactQuery from './components/ReactQuery';

{/* <Suspense fallback={<h1>Data Loading ...</h1>}>
  <Swr />
</Suspense> */}

function App() {
  return (
    <div className='App'>
      <ReactQuery/>
    </div>
  );
}

export default App;
