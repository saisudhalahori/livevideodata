

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header/Header';
import Home from './Pages/Home/Home';
import MovieList from './Components/movieList/movieList';
import Movie from './Components/movieDetail/movie';

function App() {


  return (

    <div className='App'>

     <Router>
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='movie/:id' element={<Movie/>}></Route>
        <Route path='movies/:type' element={<MovieList/>}></Route>
        <Route path='/*' element={<h1>error page</h1>}></Route>
      </Routes>
     </Router>
     </div>
    
  )
}

export default App;
