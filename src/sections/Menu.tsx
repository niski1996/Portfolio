import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Menu() {
  const { t } = useTranslation();
  return (
    <nav>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="nav hidden lg:block"
      >
        <ul className="uppercase mt-16 w-max">
          <li>
            <a className="group flex items-center py-3" href="#about">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              {t("menu.about")}
              </span>
            </a>
          </li>

          <li>{t("menu.about")}</li>
          <li>{t("menu.experience")}</li>
          <li>{t("menu.projects")}</li>
        </ul>
      </motion.h1>
    </nav>
  );
}

export default Menu;
