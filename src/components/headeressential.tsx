import { CornerDownLeft } from 'lucide-react';
import Link from 'next/link'

export function Headeressential(){
    return(
        <header className= "border-t-black border-t-4 bg-[#D7D7D7] flex justify-center py-3 text-[20px] ">
          
          <Link href={'/'}>
                <CornerDownLeft className='mt-1'/>
              </Link>  
            <h2 className="">Essential</h2>
              
          
            

        </header>
    );
}