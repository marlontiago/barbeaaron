import { Dancing_Script, Basic } from "next/font/google"
import { motion } from "framer-motion"

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

        <div>
        <div className="bg-black w-full flex h-160 p-4">                                    

        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            className="w-1/3 rounded-2xl bg-yellow-200 m-2 text-center "
            >
            <div>

                <h2 className={` text-7xl mt-6 ${dancingScript.className}`}>Cabelo</h2>
                <p className={`justify text-xl mt-4 m-2 ${basic.className}`}>Estilo, precisão e cuidado em cada corte. Do clássico ao moderno, deixamos você com o visual ideal.</p>
                <img src="corte2.jpg" alt="Corte2" className="rounded-full w-85 h-85 mx-auto mt-8 border-6" />

            </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            className="w-1/3 rounded-2xl bg-yellow-400 m-2 text-center "
            >

            <div>

                <img src="barba1.jpg" alt="Barba1" className="rounded-full w-85 h-85 mx-auto  mb-6 mt-6 border-6" />
                <h2 className={`rounded-2xl p-4 text-7xl ${dancingScript.className}`}>Barba</h2>
                <p className={`justify text-xl m-2  ${basic.className}`}>Barba feita com técnica e atenção aos detalhes. Linha perfeita e acabamento impecável para realçar seu estilo.</p>                

            </div>
            </motion.div>


            <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            className="w-1/3 rounded-2xl bg-yellow-600 m-2 text-center "
            >
            <div>
                
                <h2 className={`rounded-2xl text-7xl mt-6 m-2 ${dancingScript.className}`}>Freestyle</h2>
                <p className={`justify text-xl mt-4 ${basic.className}`}>Designs personalizados com lâmina para quem quer ousar. Arte na cabeça com criatividade e atitude.</p>
                <img src="cabelo4.jpg" alt="Cabelo4" className="rounded-full w-85 h-85 mx-auto mt-8 border-6" />

            </div>
            </motion.div>

        </div>
        </div>
    )
}