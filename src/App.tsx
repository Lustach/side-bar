import './index.css'
import './App.css'
import Sidebar from './components/SideBar'
import { useState } from 'react'
function App() {
  //todo object
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(true);
  const toggleSomeSidebar = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prevValue) => !prevValue);
  };
  return (
    <>
      <button onClick={() => toggleSomeSidebar(setIsOpen1)}>{isOpen1 ? 'Close' : 'Open'} 1 sidebar</button>
      <button onClick={() => toggleSomeSidebar(setIsOpen2)}>{isOpen2 ? 'Close' : 'Open'} 2 sidebar</button>
      <Sidebar
        onClick={() => toggleSomeSidebar(setIsOpen1)}
        isOpen={isOpen1}
        position='left'
        style={isOpen2 ? { zIndex: 11, width: '350px' } : undefined}
      >
        {/* todo portal */}
        <ul>
          <li>Some Content 1</li>
          <li>Some Content 2</li>
          <li>Some Content 3</li>
          <li>Some Content 4</li>
          <li>Some Content 5</li>
        </ul>
      </Sidebar>
      <Sidebar
        onClick={() => toggleSomeSidebar(setIsOpen2)}
        isOpen={isOpen2}
        position='left'>
        <li>Sidebar 2 Content 1</li>
        <li>Sidebar 2 Content 2</li>
        <li>Sidebar 2 Content 3</li>
        <li>Sidebar 2 Content 4</li>
        <li>Sidebar 2 Content 5</li>
      </Sidebar>
    </>
  )
}

export default App
