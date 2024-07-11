
import Navbar from './components/Navbar.js'
import './App.css';
import Card from './components/card.js'
import data from './separate.js'
const cards=data.map((item)=>{
  return(
  <Card
    {...item}

   />
   )
})

function App() {

  return (
    <div className="App">
     <Navbar/>
     <div className='main'>
     <div className='cards'>
     {cards}
     
     </div>
     </div>
     
    </div>
  )
}

export default App;
