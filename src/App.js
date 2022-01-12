import "./App.css";
import routes from "./Routes";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import CareerForm from "./Components/CareerForm";
import Homepage from "./Pages/Homepage";



function App() {
  
  return (
    <>
 <Router>
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
</Router>      
</>
  );
}

export default App;


























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







