import Image,{StaticImageData} from "next/image"
interface CardProps{
    title:string; 
    img: StaticImageData;
}
export function Card({title,img}:CardProps ){
    return(
        <div>
        <Image src={img} alt={"Colagem de Malas"} className="w-16 h-26" ></Image>
        <h3 className="text-[12px]">{title}</h3>
        </div>
    

    );
}