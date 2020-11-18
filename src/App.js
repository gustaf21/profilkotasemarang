import {BrowserRouter, Switch, Link} from 'react-router-dom';
import Home from './Component/Home';
import Pariwisata from './Component/Pariwisata';
import Kuliner from './Component/Kuliner';
import Pemerintahan from './Component/Pemerintahan';
import Sejarah from './Component/Sejarah';

function App() {
  return (
     <BrowserRouter>
         <Switch>
           <Link path="/" exact component={Home} />
           <Link path="/Pariwisata" component={Pariwisata}/>
           <Link path="/Kuliner" component={Kuliner}/>
           <Link path="/Pemerintahan" component={Pemerintahan}/>
           <Link path="/Sejarah" component={Sejarah}/>
         </Switch>
     </BrowserRouter>
  );
}

export default App;