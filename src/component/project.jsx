
import Card from "./card";
import Detail from "./details";



export default function Project(){
    return(
        <>
        <div class="projecth1">
            <h1><span class="projectab">My</span><span class="me"> Work</span><span class="projectbgtext">Projects</span></h1>
        </div>
        <div class="projectline">
            <p>Here is some of my projects that I've done in various programming languages.</p>
        </div>
        <div className="projectgrid">
        {Detail.map((item)=>(
            <Card key={item.key} details={item} />

        ))}</div>
        
        </>


    )
}


