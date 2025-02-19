import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';


export function HeroSection() {
const { t } = useLanguage();
const crc = "./src/docs/CrcGuilherme.pdf"
const email = "gui.sandroni@gmail.com"

const handleEmailSend= () =>{
  window.location.href = `mailto:${email}`
}


    return(
      
        <section className="relative flex items-center justify-center min-h-screen py-20 overflow-hidden">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div className="relative group animate-float">
              <div className="absolute inset-0 transition-opacity rounded-full opacity-75 bg-gradient-to-r from-purple-600 to-pink-600 blur-lg group-hover:opacity-100"></div>
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQG0CyRKu5HeaA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722956322446?e=1744243200&v=beta&t=WDfIwHq-WhCIOPRemv_xjbaPAnGPT0nBT1szq4rYGCE"
                alt="Profile"
                className="relative z-10 object-cover w-64 h-64 border-4 border-purple-500 rounded-full"
              />
            </div>
            <div className="space-y-6 text-center md:text-left animate-fade-in">
              <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                Guilherme Sandroni Dias
              </h1>
              <p className="text-2xl text-purple-600 dark:text-purple-400">{t('role')}</p>
              <p className="text-gray-600 dark:text-gray-400">{t('university')}</p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <button  className="flex items-center gap-2 px-6 py-3 cursor-pointer text-white transition-shadow rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/20">
                  
                  <a href={crc}  className='flex gap-2'>
                    <Download size={20}  />
                  {t('downloadCV')}
                  </a>
                </button>
                <button onClick={()=> handleEmailSend()} className="flex items-center gap-2 px-6 py-3 cursor-pointer text-purple-600 transition-colors border-2 border-purple-600 rounded-full dark:text-purple-400 hover:bg-purple-600/20">
                  <Mail size={20} />
                  {t('contactMe')}
                 
                  
                </button>
              </div>
              <div className="flex justify-center gap-4 mt-6 md:justify-start">
                <a href="https://github.com/Guisandroni" className="p-3 text-purple-600 transition-colors border-2 border-purple-600 rounded-full dark:text-purple-400 hover:bg-purple-600/20">
                  <Github  size={24} />
                </a>
                <a href="https://www.linkedin.com/in/guisandroni/" className="p-3 text-purple-600 transition-colors border-2 border-purple-600 rounded-full dark:text-purple-400 hover:bg-purple-600/20">
                  <Linkedin size={24} />
                </a>
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}