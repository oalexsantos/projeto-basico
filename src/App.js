import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <br/>
        <Main leads={this.props.leads} />
        <br/>
        <Footer/>
      </div>

    );
  }
}

export default App;
