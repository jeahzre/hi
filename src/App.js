import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './components/Calculator/Calculator';
import DrumMachine from './components/DrumMachine/DrumMachine';
import Pomodoro from './components/Pomodoro/Pomodoro';
import MarkdownPreviewer from './components/MarkdownPreviewer/MarkdownPreviewer';
import AvatarGenerator from './components/AvatarGenerator/ImageGenerator';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react'
import './App.css';


function App() {

  // :active effect doesn't last forever when mobile's user press something 
  const isMobile = /Mobile/.test(window.navigator.userAgent)

  useEffect(() => {
    if (isMobile) {
      document.body.addEventListener('touchstart', function () { }, false);

      return () => document.body.removeEventListener('touchstart', function () { }, false)
    }
  }
    , [isMobile])


  return (
    <>
      <Router basename={window.location.pathname || ''}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/drum-machine" component={DrumMachine} />
          <Route path="/pomodoro" component={Pomodoro} />
          <Route path="/markdown-previewer" component={MarkdownPreviewer} />
          <Route path="/avatar-generator" component={AvatarGenerator} />
        </Switch>
        <ScrollToTop />
      </Router>
    </>
  );
}

export default App;
