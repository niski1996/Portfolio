import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function ShortInfo() {
    const {t} = useTranslation();

    return(
        <>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Karol Ziobro
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Software Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
            {t('shortInfo')}
        </motion.p>


      </>
    )}

    export default ShortInfo;