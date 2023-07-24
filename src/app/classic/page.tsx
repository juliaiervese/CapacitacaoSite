import { Headerclassic } from '@/components/headerclassic'
import Image from 'next/image'
import bannerClass from '../../assets/bannerClass.png'
import CheckInL1 from '../../assets/CheckInL1.png'
import CheckInL2 from '../../assets/CheckInL2.png'
import Cabin1 from '../../assets/Cabin1.png'
import Cabin2 from '../../assets/Cabin2.png'
import { Product } from '@/components/products'

export default function Home() {
   return(
    <>
    <Headerclassic />
    <main className='bg-[#D7D7D7]'>
        <div className='flex flex-col justify-evenly items-center gap-2'>
           <h3 className='text-xs text-center'> A heritage-inspired collection made for <br/> the discerning traveler</h3> 
           <Image src={bannerClass} alt={'bannerClass'} className="w-56 h-32 mx-auto"></Image>
        </div> 
        <div className='flex justify-evenly mt-3 pb-3'>
        <Product title={'Check In'} img={CheckInL1} img2={CheckInL2} size={'79x53x28cm'}></Product> 
        <Product title={'Cabin'} img={Cabin1} img2={Cabin2} size={'55x40x23cm'}></Product>
        </div>
    </main>
    </>
   )
}