import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import NavLink from "../components/NavLink";

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
            <NavLink href="#about" label={t("menu.about")} />
          </li>
          <li>
            <NavLink href="#experience" label={t("menu.experience")} />
          </li>
          <li>
            <NavLink href="#projects" label={t("menu.projects")} />
          </li>
          <li>
            <NavLink href="#settings" label={t("menu.settings")} />
          </li>
        </ul>
      </motion.h1>
    </nav>
  );
}

export default Menu;
