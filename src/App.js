import './App.css';
import Photo from './assets/images/doc.png';


function App() {
  return (
    <div className="App">
      <h1>Download Button with React</h1>
      <img src={Photo} alt = 'İndirin'/>
      <a href= {Photo} download='Photo'><button type ='submit'>Download Now</button></a>
    </div>
  );
}

export default App;
