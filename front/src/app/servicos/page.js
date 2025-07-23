import { Dancing_Script, Basic } from "next/font/google"

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-dancing-script",
    display: "swap",
})

const basic = Basic({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-basic",
    display: "swap",
})

export default function Servicos(){
    return(

        <div><h1 className={`text-4xl text-center bg-amber-500 font-bold text-black p-2 ${basic.className}`}>Nossos Serviços</h1>
        <div className="bg-amber-500 w-full flex h-160 p-4"> 
            
                                     

            <div className=" rounded-2xl bg-yellow-500/20 w-1/3 text-center">

                <h2 className={` text-7xl ${dancingScript.className}`}>Cabelo</h2>
                <p className={`justify text-xl mt-4 ${basic.className}`}>Estilo, precisão e cuidado em cada corte. Do clássico ao moderno, deixamos você com o visual ideal.</p>
                <img src="corte2.jpg" alt="Corte2" className="rounded-full w-85 h-85 mx-auto mt-8" />

            </div>

            <div className=" w-1/3 rounded-2xl bg-yellow-500/20 m-2 text-center">

                <img src="barba1.jpg" alt="Barba1" className="rounded-full w-85 h-85 mx-auto  mb-6" />
                <h2 className={`rounded-2xl p-4 text-7xl ${dancingScript.className}`}>Barba</h2>
                <p className={`justify text-xl  ${basic.className}`}>Barba feita com técnica e atenção aos detalhes. Linha perfeita e acabamento impecável para realçar seu estilo.</p>                

            </div>

            <div className="rounded-2xl bg-yellow-500/20 m-2 w-1/3 text-center">
                
                <h2 className={`rounded-2xl text-7xl ${dancingScript.className}`}>Freestyle</h2>
                <p className={`justify text-xl mt-4 ${basic.className}`}>Designs personalizados com lâmina para quem quer ousar. Arte na cabeça com criatividade e atitude.</p>
                <img src="cabelo4.jpg" alt="Cabelo4" className="rounded-full w-85 h-85 mx-auto mt-8" />

            </div>



        </div>
        </div>
    )
}