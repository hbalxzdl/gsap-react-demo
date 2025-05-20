import Ripple from './components/ripple';
import Zoom from './components/zoom';
import Stagger from './components/stagger.tsx';
import Scan from './components/scan';

function App() {

  return (
    <>
      <div className="grid grid-cols-4 gap-4 bg-gray-200">
        <div className="flex justify-center items-center">
          <Ripple/>
        </div>
        <div className="flex justify-center items-center">
          <Zoom/>
        </div>
        <div className="flex justify-center items-center">
          <Stagger/>
        </div>
        <div className="flex justify-center items-center">
          <Scan/>
        </div>
      </div>
    </>
  )
}

export default App
