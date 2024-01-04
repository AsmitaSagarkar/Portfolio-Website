
import Card from "./card";
import Detail from "./details";



export default function Project(){
    return(
        <>
        {Detail.map((item)=>(
            <Card key={item.key} details={item} />

        ))}
        
        </>


    )
}


