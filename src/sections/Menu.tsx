import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Menu(){
    const {t} = useTranslation();
    return(
        <>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
            <ul>
                <li></li>
            </ul>
          </motion.h1>
        </>
    
}