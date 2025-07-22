'use client'

import Contato from "../contato/page";
import Footer from "../footer/page";
import Principal from "../principal/page";
import Servicos from "../servicos/page";
import Sobre from "../sobre/page";
import { motion, } from "framer-motion";

export default function Body(){
    return(
        <div>
            <section id="home" className="w-full h-180 scroll-mt-20">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}    
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 2, ease: "easeOut" }}
                    className=" w-full h-180 bg-yellow-400"
                >
                    <Principal/>
               </motion.div>
            </section>

            <section id="servicos" className="w-full scroll-mt-20">
                <Servicos/>
            </section>

            <section id="sobre" className="w-full scroll-mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3 }}
                    className="bg-white rounded-xl shadow-md"
                >                
                <Sobre/>                
                </motion.div>
                
            </section>

            <section id="contato" className="w-full scroll-mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                 >
                    <Contato/>
                </motion.div>
            </section>

            
        </div>
    )
}