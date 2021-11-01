import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { PlanProvider } from './context/PlanContext';

import './styles/app.scss';

import HomePage from './pages/Home';
import PlanPage from './pages/Plan';
import ThanksPage from './pages/Thanks';

function App() {
  return (
    <PlanProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/arma-tu-plan" component={PlanPage} />
          <Route exact path="/gracias" component={ThanksPage} />
        </Switch>
      </Router>
    </PlanProvider>
  );
}

export default App;
