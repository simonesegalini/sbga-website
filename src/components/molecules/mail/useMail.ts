import { useTheme } from "@mui/material/styles";
import { useEmailStyle } from "./styles";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import { useDimensions } from "../../../hooks/useDimensions";
import { makeApiUrl } from "../../../hooks/useAllDataLoader";

type MailScreen = "data" | "loading" | "error" | "success";

interface IBodyPost {
  id_contact: string;
  name: string;
  emailAddress: string;
  message: string;
  token: string;
}

export interface IEmail {
  mail_id: string;
  onSuccess?: () => void;
}

const createBodyPost = (data: IBodyPost): FormData => {
  const bodyFormData = new FormData();
  bodyFormData.append("id_contact", data.id_contact);
  bodyFormData.append("name", data.name);
  bodyFormData.append("message", data.message);
  bodyFormData.append("email_address", data.emailAddress);
  bodyFormData.append("token", data.token);
  return bodyFormData;
};

const useMail = (props: IEmail) => {
  const { mail_id } = props;
  const theme = useTheme();
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const styles = useEmailStyle(theme, isSmall);
  const { t } = useTranslation();
  const [screen, setScreen] = useState<MailScreen>("data");

  const [
    { data: postMail, loading: postLoading, error: postError },
    postMailExecute,
  ] = useAxios(
    {
      url: makeApiUrl("/sendMail/"),
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    },
    { manual: true }
  );

  const validationSchema = yup.object({
    name: yup.string().required(t("label.nameRequired")),
    email: yup
      .string()
      .email(t("label.emailValid"))
      .required(t("label.emailRequired")),
    message: yup.string().required(t("label.messageRequired")),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const body = createBodyPost({
        id_contact: mail_id,
        name: values.name,
        emailAddress: values.email,
        message: values.message,
        token: "5dOX3BwoJ@eK6sqr7J@5",
      });
      postMailExecute({ data: body });
    },
  });

  useEffect(() => {
    if (postMail && postMail.success) {
      setScreen("success");
      return;
    }
    if (postLoading) {
      setScreen("loading");
      return;
    }
    if (postError) {
      setScreen("error");
      return;
    }
  }, [postMail, postLoading, postError]);

  return {
    error: !!postError,
    formik,
    loading: postLoading,
    screen,
    success: screen === "success",
    styles,
    t,
  };
};

export default useMail;
