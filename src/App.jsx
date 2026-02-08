import { gsap } from 'gsap'
import{ ScrollTrigger, SplitText} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-indigo-400 text-3xl'>HELLO GSAP</h1>
    </div>
  )
}

export default App
