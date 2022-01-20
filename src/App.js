import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import UserArea from "./UserArea"

function App() {
    return (
        <div className="App container col-12">
            
            <header className="App-header">
                Hello
            </header>
        
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/users/:userId">
                    <UserArea />
                </Route>
            </Switch>


        </div>
    );
}

export default App;
