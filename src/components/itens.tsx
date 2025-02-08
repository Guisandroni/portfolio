
import { MarketItems } from "./projects/marketItems";
import { TripInvites } from "./projects/tripInvites";
import { Bagcoin } from "./projects/bagcoin";
import { Movies } from "./projects/movies";


export function Itens () {
    
    return(

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
       
      <MarketItems/>
      <TripInvites/>
      <Bagcoin />
      <Movies/>
      
  
  </div>

  

    )
}