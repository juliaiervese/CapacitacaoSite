import { Headeressential } from '@/components/headeressential'
import Image from 'next/image'
import bannerEss from '../../assets/bannerEss.png'
import EssPink1 from '../../assets/EssPink1.png'
import EssPink2 from '../../assets/EssPink2.png'
import Essbrown1 from '../../assets/Essbrown1.png'
import EssBrrown2 from '../../assets/EssBrrown2.png'
import { Product } from '@/components/products'

export default function Home() {
   return(
    <>
    <Headeressential />
    <main className='bg-[#D7D7D7] pb-4'>
        <div className='flex justify-around'>
           <h3 className='text-xs flex justify-left ml-11'> The world first <br/> polycarbonate <br/>  suitcase, <br/> designed in <br/> Germany to offer <br/> the best in terms <br/> of functionality <br/> and high <br/> technology.</h3> 
           <Image src={bannerEss} alt={'bannerEss'} className="w-44 h-36 mx-auto"></Image>
        </div>
        <div className='flex justify-evenly mt-7 '>
        <Product title={'Trunk Plus'} img={EssPink1} img2={EssPink2} size={'80x37x41cm'}></Product> 
        <Product title={'Cabin'} img={Essbrown1} img2={EssBrrown2} size={'55x39x23cm'}></Product>
        </div>
    </main>
    </>
   )
}