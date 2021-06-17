import {useState, useRef, useEffect, forwardRef} from 'react'
import Lifecycle15 from "./components/lifecycle/lifecycle15";
import Lifecycle16 from "./components/lifecycle/lifecycle16";
import ErrorBoundary from './components/ErrorBoundary'
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'


function App() {
    const [user, setUser] = useState({
        name: 'dog'
    })
    const reactEelmentRef = useRef() // 可以在函数组件内部使用ref
    const divEelmentRef = useRef()
    // useEffect(()=>{
    //     reactEelmentRef.current.textInput.current.select()
    //     console.log('divEelmentRef',divEelmentRef.current);
    // },[])
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to='/life-cycle15' >Life cycle15</Link>
                    </li>
                    <li>
                        <Link to='/life-cycle16' >Life cycle16</Link>
                    </li>
                    <li>
                        <Link to='/error-boundary'>ErrorBoundary</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/life-cycle15" exact>
                    <Lifecycle15/>
                </Route>
                <Route path="/life-cycle16" exact>
                    <Lifecycle16/>
                </Route>
                <Route path="/error-boundary">
                    <ErrorBoundary />
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
