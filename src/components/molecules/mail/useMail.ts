import { useTheme } from "@mui/material/styles";
import { useEmailStyle } from "./styles";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import { useDimensions } from "../../../hooks/useDimensions";
import { makeApiUrl } from "../../../hooks/useAllDataLoader";
import { MailType } from "../../../schemas";

type MailScreen = "data" | "loading" | "error" | "success";

interface IBodyPost {
  subject: string;
  emailAddress: string;
  message: string;
}

export interface IEmail {
  onSuccess?: () => void;
  type: MailType;
}

const createBodyPost = (data: IBodyPost): FormData => {
  const bodyFormData = new FormData();
  bodyFormData.append("subject", data.subject);
  bodyFormData.append("message", data.message);
  bodyFormData.append("emailAddress", data.emailAddress);
  bodyFormData.append("debugEmail", "simonesegalini10@gmail.com");
  return bodyFormData;
};

const getPathFromEmailType = (type: MailType) => {
  switch (type) {
    case "general_enquiry":
      return "/general/";
    case "tendering_enquiry":
      return "/ten/";
    case "job_enquiry":
      return "/job/";
    case "press_contact":
      return "/press/";
    default:
      return "";
  }
};

const useMail = (props: IEmail) => {
  const { type } = props;
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
      url: makeApiUrl(getPathFromEmailType(type)),
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
        subject: values.name,
        emailAddress: values.email,
        message: values.message,
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
