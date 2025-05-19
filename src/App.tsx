import Ripple from './components/ripple';
import Zoom from './components/zoom';

function App() {

  return (
    <>
      <div className="grid grid-cols-4 gap-4 flex justify-center items-center  bg-gray-200">
        <Ripple/>
        <Zoom/>
      </div>

    </>
  )
}

export default App
