import * as yup from "yup";
import { useCommonTranslations } from "./CommonTranslations";
import { LoginDataTypes } from "@/shared/interfaces/LoginDataTypes";

export const LoginValidationSchema = (type: "sign-in" | "sign-up"): yup.ObjectSchema<LoginDataTypes> => {
  const { t } = useCommonTranslations();

  return yup.object({
    firstName: type === "sign-up" ? yup.string().required(t("firstNameRequired")) : yup.string().notRequired(),
    lastName: type === "sign-up" ? yup.string().required(t("lastNameRequired")) : yup.string().notRequired(),
    email: yup.string().email(t("invalidEmail")).required(t("emailRequired")),
    password: yup.string().required(t("passwordRequired")),
  }) as yup.ObjectSchema<LoginDataTypes>;
};
