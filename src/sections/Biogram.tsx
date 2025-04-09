import { useTranslation } from "react-i18next";

function Biogram() {
  const { t } = useTranslation();
  return (
    <>
      <p>{t("bio.basic")}</p>
      <p>{t("bio.edu")}</p>
      <p>{t("bio.future")}</p>
      <p>{t("bio.future1")}</p>
      <p>{t("bio.future2")}</p>
    </>
  );
}

export default Biogram;
