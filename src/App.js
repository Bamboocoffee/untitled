import React, {Component} from 'react';
import './App.css';
import Timer from './components/timer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <Container >
                <h2> Drinks Reception </h2>
                <Timer />
            </Container>
        </React.Fragment>
    );
  }
}

export default App;
