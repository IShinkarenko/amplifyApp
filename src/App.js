import logo from './logo.svg';
import './App.css';
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);



const analyticsConfig = {
  AWSPinpoint: {
        // Amazon Pinpoint App Client ID
        appId: 'aead37126dc4452a97afb4553f5964cd',
        // Amazon service region
        region: 'eu-west-2',
        mandatorySignIn: false,
  }
}

Analytics.configure(analyticsConfig)


function App() {

  const handleClick = () => {
    Analytics.record({
      name: 'Album',
      attributes: { genre: 'Rock', year: '1989' }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={handleClick}>Click for Events</button>
      </header>
    </div>
  );
}

export default App;
