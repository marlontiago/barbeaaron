import { Raleway, Roboto } from "next/font/google"
import Link from 'next/link';

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-raleway",
    display: "swap",
})

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-roboto",
    display: "swap",
})

export default function Principal(){

    return(
        <div>
            <h1 className={`text-6xl font-bold mt-20 p-10 ${raleway.className}`}>Bem-vindo à BarbeAaron, onde o seu estilo é levado a sério!</h1>
            <div className="flex">
            <p className={` w-200 p-8 text-xl text-justify indent-8 leading-8 ${roboto.className}`}>Aqui, cada cliente é único. Por isso, oferecemos um atendimento totalmente personalizado: você não é apenas mais um corte na cadeira. Nossa equipe é formada por profissionais especializados que entendem do assunto e sabem transformar uma simples visita em uma experiência completa de cuidado e autoestima.

            Corte, barba ou aquele trato no visual? Tudo é feito do jeito que você gosta, com atenção aos detalhes e aquele bate-papo descontraído que só uma barbearia de verdade oferece.

            Sinta-se em casa. Escolha seu estilo. A gente cuida do resto.
            <br/>
            <br/>
            <Link href="#servicos" className={`${roboto.className} inline-block text-right indent-0  bg-black text-white px-3 py-2 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-110`}>Conheça nossos serviços</Link>
            </p>
            
            <img src="corte1.jpg" alt="Barbearia" className="w-170 h-100 ml-4 object-cover rounded-lg shadow-lg " />

            
            </div>

            

        </div>
    )
}