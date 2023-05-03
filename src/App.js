import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/NavBar/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action,orginals,horror,comedy,romance,documentaries} from './urls'
// import { Routes,Route } from 'react-router'
// import Tvshows from './Tvshows'
// import { Link } from 'react-router-dom';
// import Notdefined from './Notdefined';




function App() {
  return (
    
    <div className="App">
      
      
      <NavBar /> 
      {/* <div className='navnav' >
      <li><Link to='/about'>Tv Shows</Link></li>
      <Routes>
        <Route path='/about' element={<Tvshows />}></Route>
        <Route path='/*' element={<Notdefined />}></Route>
        </Routes>
        </div> */}
      <Banner />
      <RowPost url={orginals} title = 'Netflix Orginals'/>   
      <RowPost url={action} title='Acton' isSmall /> 
      <RowPost url={romance} title='Romance Movies' isSmall /> 
      <RowPost url={horror} title='Horror Movies' isSmall /> 
      <RowPost url={comedy} title='Comedy Movies' isSmall /> 
      <RowPost url={documentaries} title='Documentaries' isSmall /> 
    </div>
  );
}

export default App;
