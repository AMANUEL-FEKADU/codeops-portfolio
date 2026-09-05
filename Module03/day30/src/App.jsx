import Header from './Header'
import "./App.css"
import Menu from "./Menu"
import { ThemeContext } from './ThemeContext'

function App() {


  return (
    <>
    <ThemeContext.Provider value='dark'>
    <Header/>
    <Menu />
    </ThemeContext.Provider>
    </>
  )
}


export default App
