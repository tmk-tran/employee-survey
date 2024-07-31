import './App.css';
import SurveyCard from './components/SurveyCard';
import EmployeeSurvey from './components/EmployeeSurvey';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Employee Survey - PixelFree
      </header>
      <SurveyCard />
      <EmployeeSurvey />
    </div>
  );
}

export default App;
