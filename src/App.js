import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { UserPlanProvider } from './context/UserPlanContext';

import './styles/app.scss';

import HomePage from './pages/Home';
import PlanPage from './pages/Plan';
import ThanksPage from './pages/Thanks';

function App() {
  return (
    <UserPlanProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/arma-tu-plan" component={PlanPage} />
          <Route exact path="/gracias" component={ThanksPage} />
        </Switch>
      </Router>
    </UserPlanProvider>
  );
}

export default App;
