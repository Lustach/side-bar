import './index.css'
import './App.css'
import Sidebar from './components/SideBar'
import Overlay from './components/Overlay'
import { useState } from 'react'
function App() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(true);

  const toggleSidebar1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleSidebar2 = () => {
    setIsOpen1(!isOpen2);
  };
  const handleChildClick = () => {
    setIsOpen1(!isOpen1);
  }
  const handleChildClick2 = () => {
    setIsOpen2(!isOpen2);
  }
  return (
    <>
      {isOpen1 && isOpen2 ? <Overlay isOverlay /> : null}


      <button onClick={toggleSidebar1}>{isOpen1 ? 'Close' : 'Open'} 1 sidebar</button>
      <button onClick={toggleSidebar2}>{isOpen2 ? 'Close' : 'Open'} 2 sidebar</button>

      <Sidebar
        onClick={handleChildClick}
        isOpen={isOpen1}
        position={'left'}
        style={isOpen2 ? { zIndex: 11, width: '350px' } : {}}
      >
        <ul>
          <li>Some Content 1</li>
          <li>Some Content 2</li>
          <li>Some Content 3</li>
          <li>Some Content 4</li>
          <li>Some Content 5</li>
        </ul>

      </Sidebar>
      <Sidebar
        onClick={handleChildClick2}
        isOpen={isOpen2}
        position={'left'}>
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
