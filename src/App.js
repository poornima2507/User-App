import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import SearchUser from './components/SearchUser';
import DeleteUser from './components/DeleteUser';
import ViewUser from './components/ViewUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddUser/>}/>
      <Route path='/search' element={<SearchUser/>}/>
      <Route path='/delete' element={<DeleteUser/>}/>
      <Route path='/view' element={<ViewUser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
