import { motion } from "framer-motion"

export default function Sobre(){
    return(
        <div className="flex h-screen">

            <motion.div
                
                whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1, }}
                animate={{rotate: 360, scale: 0.1,}}
                transition={{ duration: 0.8, ease: "easeInOut", bounce: 0.7,}}
                className="w-1/2 h-screen bg-gray-700 p-8"
                >
            <div className="space-y-10 indent-10 text-white p-4 text-lg">
            <h2 className="text-3xl font-bold">Prazer, me chamo Aaron!</h2>
            <p className="opacity-90 justify">
                Sou barbeiro e apaixonado pelo que faço. Desde que comecei a cortar cabelo, descobri que não se trata apenas de aparar fios — é sobre estilo, confiança e atitude. Cada cliente que senta na minha cadeira recebe um atendimento feito com atenção, respeito e dedicação total.
            </p>
            <p className="opacity-80">
                Trabalho com cortes masculinos, barba e também freestyle — aquele desenho detalhado que dá um toque único ao seu visual. Gosto de ouvir o que cada pessoa quer, entender seu estilo e entregar um resultado que realmente faça ela se sentir bem.
            </p>
            <p className="opacity-70">
                Atendo pessoas de todas as idades, sempre buscando o equilíbrio entre técnica, criatividade e conforto. Aqui, cada corte é pensado pra valorizar quem você é.
            </p>
            <p className="opacity-60">
                Se quiser mudar o visual, renovar o estilo ou apenas dar aquele trato no corte ou na barba — cola com a gente. Vai ser um prazer te atender!
            </p>   
           </div>
            </motion.div>


        <motion.div
                
                whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1, }}
                animate={{rotate: -360, scale: 0.1,}}
                transition={{ duration: 0.8, ease: "easeInOut",}}
                className="w-1/2 h-screen bg-gray-500 p-8"
                >

           <div className=""> 

            <h1 className="text-3xl mb-10">Venha nos visitar.</h1>
            <p className="justify text-xl  indent-10">Nossa barbearia está de portas abertas para receber você! Passe aqui para um corte impecável, uma barba feita com cuidado e uma experiência única.</p>
            <br/>
            <p className="justify text-xl mb-6 indent-10">Venha tomar um café, bater um papo e sair renovado. Na <strong>BarbeAaron</strong>, seu estilo é nossa prioridade.</p>
            <h2 className="mb-10 text-2xl">Localização:</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.5722741385953!2d-49.338501824896774!3d-25.38564783113775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce04fc91cd6f5%3A0x5780190fc48c5bc3!2sRua%20Sociologo%20Gilberto%20Freyre%2C%2047%20-%20Santa%20Felicidade%2C%20Curitiba%20-%20PR%2C%2082410-100!5e0!3m2!1spt-BR!2sbr!4v1753321323840!5m2!1spt-BR!2sbr" width="100%"  height="320" style={{border: 0, borderRadius: 10,}}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

           </div>
        </motion.div>
            
        </div>
    )
}