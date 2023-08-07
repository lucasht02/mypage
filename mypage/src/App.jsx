import { BrowserRouter } from 'react-router-dom';
import { Menu, Hero } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div>
          <Menu />
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
