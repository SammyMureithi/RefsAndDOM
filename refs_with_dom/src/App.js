import './App.css';
import CustomeFunctionalText from './Components/CustomeFunctionalText';
import CustomeTextInput from './Components/CustomeTextInput';

function App() {
  return (
    <div className="App">
      <h1>Class Component</h1>
      <CustomeTextInput />
      <h1>Functional Component</h1>
      <CustomeFunctionalText/>
    </div>
  );
}

export default App;
