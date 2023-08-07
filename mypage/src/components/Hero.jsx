import { motion } from "framer-motion";

import { styles } from "../styles"
import CarCanvas from "./Car"

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div>
                <h1 className={`${styles.heroHeadText}`}>Hi, wassup</h1>
            </div>
            <CarCanvas />
        </section>

    )
}

export default Hero;