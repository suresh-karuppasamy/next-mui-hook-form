import { useTranslation } from "react-i18next";

export const useCommonTranslations = () => {
  const { t } = useTranslation();
  return { t };
};
