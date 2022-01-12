import "./App.css";
import routes from "./Routes";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import CareerForm from "./Components/CareerForm";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";



function App() {
  
  return (
    <>
    <Navbar/>
</>
  );
}

export default App;



{/* <Router>
<Switch>
{
  routes.map((route)=>{
    return <Route
     key={route.path}
     path={route.path}
     component={route.component}
     />
  })
}
</Switch>
</Router>   */}






















// function App() {
//   return (
//  <Router>
//   <Switch>
//     <Route path="/product/:id">
//       <ProductDetails/>
//     </Route>
//   </Switch>
// </Router> 
// );
// }

// export default App;







