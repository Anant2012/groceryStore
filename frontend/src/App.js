import Header from './header';
import Main from './Main';
import Page from "./page";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import User from "./user";
import User1 from "./user1";
import Footer from './Footer';
import Cart from './cart'
import {Route,Switch,useLocation} from "react-router-dom"

function App() {
  return (
  <>
  <Header/>
  

    <Switch>
     <Route path='/users'  exact>
        <User/>
      </Route>
      <Route path='/user1'  exact>
        <User1/>
      </Route>
      <Route exact path='/' component={Main} />
      <Route path='/FruitsandVegetable'  exact>
        <Page/>
      </Route>
      <Route path='/Bakery&Snacks' exact>
        <Page1/>
      </Route>
      <Route path='/PersonalCare' exact>
        <Page2/>
      </Route>
      <Route path='/InstantFood' exact>
        <Page3/>
      </Route>
      <Route path='/FoodGrian' exact>
        <Page4/>
      </Route>
      <Route path='/DryFruits' exact>
        <Page5/>
      </Route>
      <Route path='/cart' exact>
        <Cart/>
      </Route>

      

    </Switch>  

    <Footer/>
  </>

  )
}

export default App
