import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quotes from './components/Quotes';
import NavBar from './components/Nav';
import Calculator from './components/Calculator';
import Home from './components/Home';

class RenderPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </>
    );
  }
}
export default RenderPage;
