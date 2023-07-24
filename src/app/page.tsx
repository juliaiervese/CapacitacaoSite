import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/card'
import trunkpg1 from '../assets/trunkpg1.png'
import CheckInpg1 from '../assets/CheckInpg1.png'
import FlapNylonpg1 from '../assets/FlapNylonpg1.png'
import colagem from '../assets/colagem.png'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <main className="bg-[#D7D7D7] ">
      <Header/>
      <div className="mt-4 flex justify-evenly text-[12px]">
        <Link href={'/essential'}>Essential</Link>
        <Link href={'/classic'}>Classic</Link>
        <Link href={'/neverstill'}>Never Still</Link>
      </div>
      <div className=' flex justify-evenly text-[12px]'>
       <Card title={'Trunk Plus'} img={trunkpg1}></Card>
       <Card title={'Check In'} img={CheckInpg1}></Card>
       <Card title={'Flap Nylon'} img={FlapNylonpg1}></Card>
      </div>
      <div className='pt-4'>
      <Image src={colagem} alt={"Colagem"} className="w-65 h-46 mx-auto" ></Image>
      <p className='text-[10px] text-center leading-tight py-5'>In the realm of travel, luxury luggage stands as a symbol of <br/> refinement, craftsmanship, and sophistication. Beyond its <br/> utilitarian purpose, luxury luggage transcends mere <br/> functionality, becoming an expression of individuality and taste <br/> for the discerning globetrotter.</p>
      </div>
      
      
    </main>
  )
}
