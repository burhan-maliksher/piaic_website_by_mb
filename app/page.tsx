import Section1 from './components/(homePage)/section1'
import Section2 from './components/(homePage)/section2'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Section1/>
      <Section2/>
    </div>
  )
}
