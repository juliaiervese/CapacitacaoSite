import Image,{StaticImageData} from "next/image"
interface CardProps{
    title:string; 
    img: StaticImageData;
    img2: StaticImageData;
    size:string;
}
export function Product({title,img,img2,size}:CardProps ){
    return(
        <div className="flex flex-col justify-center items-center gap-6">
        <h3 className="text-[12px]">{title}</h3>
        <Image src={img} alt={"Malas"} className="w-16 h-26" ></Image>
        <Image src={img2} alt={"Malas"} className="w-16 h-26" ></Image>
        <span className="text-[12px]">{size}</span>
        </div>
    

    );
}