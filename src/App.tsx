import './index.css'
import './App.css'
import {useState} from 'react'
// import Sidebar from './components/SideBar'
import MultiSidebar from './components/MultSidebar'
function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <Sidebar position={'left'}>
        <div>fadsf</div>
      </Sidebar> */}
      {/* <button className={`toggle-button`}onClick={toggleSidebar}>
        Toggle Sidebar
      </button> */}
      <button>click</button>
      <MultiSidebar layersNumber={1} />
    </>
  )
}

export default App
