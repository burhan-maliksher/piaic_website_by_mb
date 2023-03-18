import About from './components/(homePage)/about'
import Patners from './components/(homePage)/patners'
import Section1 from './components/(homePage)/section1'
import Section2 from './components/(homePage)/section2'

export default function Home() {
  return (
    <div className='flex  flex-col gap-10 space-y-10 bg-gray-900'>
      <Section1/>
      <Section2/>
      <About/>
      <Patners/>
    </div>
  )
}
