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
          className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"
        >
          Karol Ziobro
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"
        >
          Software Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-4 max-w-xs leading-normal"
        >
            {t('shortInfo')}
        </motion.p>


      </>
    )}

    export default ShortInfo;