import Header from './Components/Header/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SportsScreen from './Components/Screen/SportsScreen/SportsScreen';
import DishScreen from './Components/Screen/DishesScreen/DishScreen';

function App() {
  
  return (
    <Router>
     <div>
       <Header/>
     
     <Switch>
        <Route path="/dishes">
          <DishScreen/>
        </Route>
        <Route path="/sports">
          <SportsScreen/>
        </Route>
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
