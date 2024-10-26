import './App.css';
import FCanvas from './canvas/FCanvas';
import ToolBarComponent from './toolbar/components/ToolBarComponent';

function App() {

  return (
    <div className='h-screen flex'>
      <ToolBarComponent />
      <div className='w-full bg-red-400 overflow-y-auto'>
        <FCanvas />
      </div>
      <div className='w-[300px] h-full'></div>
    </div>
  )
}

export default App;