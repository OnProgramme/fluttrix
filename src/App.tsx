import './App.css';
import FCanvas from './canvas/FCanvas';
import ToolBarComponent from './toolbar/components/ToolBarComponent';

function App() {
  return (
    <div className='h-screen flex'>
      <ToolBarComponent
        onDragStar={(e, w) => e.dataTransfer.setData("data", w.type ?? '')}
      />
      <div className='w-full'>
        <FCanvas />
      </div>
      <div className='w-[300px] h-full'></div>
    </div>
  )
}

export default App;