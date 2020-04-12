import React, {Component} from 'react';
import fire from "./config/fire";
import Login from "./Login";
import Home from "./Home";

import './App.css';

// function App() {
//   const [user, setUser] = useState({});
//
//   return (
//     <div className="App">
//
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }

  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      }
      else {
        this.setState({user: null});
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? <Home /> : <Login />}
      </div>
    );
  }
}

export default App;
