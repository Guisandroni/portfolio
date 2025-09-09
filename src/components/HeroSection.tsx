import { Download, Mail, Github, Linkedin } from 'lucide-react';
import crc from '../assets/cv/CrcGuilherme.pdf'
import profile from "../assets/imgs/profile.jpg"

export function HeroSection() {
  const email = "gui.sandroni@gmail.com"

  const handleEmailSend = () => {
    window.location.href = `mailto:${email}`
  }


  return (
    
    <section id='guisandroni.dev' className="relative flex items-center justify-center min-h-screen py-20 overflow-hidden scroll-mt-20">
      <div className="container flex items-center justify-center px-6 mx-auto ">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <div className="relative group animate-float">
            <div className="absolute inset-0 transition-opacity rounded-full opacity-75 bg-gradient-to-r group-hover:opacity-100"></div>
            <img
              src={profile}
              alt=""
              className="relative z-10 object-cover w-40 h-40 border-4 border-purple-500 rounded-full md:w-54 md:h-54"
            />
          </div>
          <div className="space-y-6 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              Guilherme Sandroni Dias
            </h1>
            <p className="text-xl text-purple-600 md:text-2xl dark:text-purple-400">{'Desenvolvedor Junior - FullStack'}</p>
            <p className="text-gray-600 dark:text-gray-400">{'Análise e Desenvolvimento de Sistemas - Fatec Sorocaba '}</p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <button className="flex items-center gap-2 px-6 py-3 text-white transition-shadow rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/20">

                <a href={crc} download='crc' className='flex gap-2'>
                  <Download size={20} />
                  {'Currículo'}
                </a>
              </button>
              <button onClick={() => handleEmailSend()} className="flex items-center gap-2 px-6 py-3 text-purple-600 transition-colors border-2 border-purple-600 rounded-full cursor-pointer dark:text-purple-400 hover:bg-purple-600/20">
                <Mail size={20} />
                {'Contato'}
              </button>
            </div>
            <div className="flex justify-center gap-4 mt-6 md:justify-start">
              <a href="https://github.com/Guisandroni" className="p-3 text-purple-600 transition-colors border-2 border-purple-600 rounded-full dark:text-purple-400 hover:bg-purple-600/20">
                <Github size={24} />
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