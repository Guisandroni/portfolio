import { ExternalLink, Github } from "lucide-react";

export function MarketItems(){
    
    return(

        <div
       
        className="bg-white dark:bg-[#121212] rounded-xl overflow-hidden border border-purple-100 dark:border-purple-900/20 hover:scale-105 transition-all duration-300"
      >
        <img
          src="https://github.com/Guisandroni/market-Itens/raw/main/doc/home.PNG"
          alt={`Project `}
          className="object-cover w-full h-48"
        />
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold">{'MarketItems'}</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-400">{'DescriptionMarketItems'}</p>
          <div className="flex gap-4">
            <a
              href="https://marketitens.onrender.com/"
              className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
            >
              <ExternalLink size={20} className="transition-transform transform group-hover:rotate-45"/>
            
            </a>
            <a
               href="https://github.com/Guisandroni/Api-rest-fastfy/tree/main"
              className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
            >
              <Github  size={20} />
              {'repository'}
            </a>
          </div>
        </div>
      </div>
    )
}