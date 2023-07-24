import { Headerneverstill } from '@/components/headerneverstill'
import Image from 'next/image'
import bannerNev from '../../assets/bannerNev.png'
import FlapNylon1 from '../../assets/FlapNylon1.png'
import FlapNylon2 from '../../assets/FlapNylon2.png'
import TrunkPlus1 from '../../assets/TrunkPlus1.png'
import TrunkPlus2 from '../../assets/TrunkPlus2.png'
import { Product } from '@/components/products'

export default function Home() {
   return(
    <>
    <Headerneverstill />
    <main className='bg-[#D7D7D7]'>
        <div className='flex justify-evenly pt-2'>
           <Image src={bannerNev} alt={'bannerNev'} className="w-40 h-32 mx-auto"></Image>
           <h3 className='text-xs text-right mr-11'> Contemporary, <br/> functional, and <br/> elegant solution <br/> for daily urban  <br/> commuting, <br/> business, and  <br/> beyond.</h3> 
        </div>
        <div className='flex justify-evenly mt-5 pb-5'>
        <Product title={'Flap Nylon'} img={FlapNylon1} img2={FlapNylon2} size={'80x37x41cm'}></Product> 
        <Product title={'Trunk Plus'} img={TrunkPlus1} img2={TrunkPlus2} size={'40x38x5cm'}></Product>
        </div>
    </main>
    </>
   )
}