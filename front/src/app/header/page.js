import Link from 'next/link';
import {Scissors} from 'lucide-react';
import {FaInstagram, FaWhatsapp, FaFacebook} from 'react-icons/fa';
import { Saira } from 'next/font/google';

const saira = Saira({
    weight: '400',
    subsets: ['latin'],
})

export default function Header(){

    return(
        <div className="fixed top-0 left-0 w-full z-50 bg-black h-20 text-white flex justify-between items-center px-4 shadow border-b-2">
                <Link href='/home'><Scissors className="w-8 h-8" /></Link>

            <div>
                <Link href="#home" className={`text-2xl ${saira.className} p-8 hover:text-amber-700`}>Home</Link>
                <Link href="#servicos" className={`text-2xl ${saira.className} p-8 hover:text-amber-700`}>Serviços</Link>
                <Link href="#sobre" className={`text-2xl ${saira.className} p-8 hover:text-amber-700`} >Sobre</Link>
                <Link href="#contato" className={`text-2xl ${saira.className} p-8 hover:text-amber-700`} >Contato</Link>

            </div>

            <div className='flex p-2'>
                <a className='p-2' href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                    <FaInstagram className='h-6 w-6'/>
                </a>

                <a className='p-2' href='https://api.whatsapp.com/send?phone=1234567890' target='_blank' rel='noopener noreferrer'>
                    <FaWhatsapp className='h-6 w-6'/>
                </a>

                <a className='p-2' href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                    <FaFacebook className='h-6 w-6'/>
                </a>
            </div>
            
        </div>
    )
}