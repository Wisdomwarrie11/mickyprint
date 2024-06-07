import Home from './Home'
import Navbar from './Navbar'


function App (){
  return(
    <>
   
      <div style={{backgroundColor: '#FFF6F6'}}>
        <div className="row">
          <div className="col">
          <Navbar/>
          <Home/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App