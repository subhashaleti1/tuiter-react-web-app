import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {

    return (

        <HashRouter>
            <div className="container">
                <Routes>
                    <Route path="/"         element={<Navigate to="/labs"/>}/>
                    <Route path="/labs/*"   element={<Labs/>}/>
                    <Route path="/hello"    element={<HelloWorld/>}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}
export default App;