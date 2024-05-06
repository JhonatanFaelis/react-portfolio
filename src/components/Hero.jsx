import React from 'react'
import perfil from '../assets/perfil.png'
import { TypeAnimation } from 'react-type-animation'
import {link} from '../Auxs/linkWpp'
import DownloadPDF from './BtnDownload'
import {cvBase64} from '../Auxs/cvBase64'

function Hero() {
    return (
        <div className='grid grid-bols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto h-[70vh] py-8 bg-black'>

            <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
                <img className='rounded-full' src={perfil} alt='Hero Image' />
            </div>
            <div className='col-span-2 px-5'>
                <h1 className='text-white text-4xl sm:text-5-lx lg:text-8xl font-extrabold'>
                    <span className='primary-color'> Desenvolvedor </span> <br />
                    <TypeAnimation
                        sequence={
                            [
                                "Frontend Dev",
                                1000,
                                "Backend Dev",
                                1000,
                            ]
                        }
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    
                </p>
                <div className='my-8'>
                    <DownloadPDF base64String={cvBase64} fileName={"Curriculo"} />
                    <a href={link} target='_blank' className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                        Contato
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Hero