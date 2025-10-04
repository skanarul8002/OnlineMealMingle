import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../../State/Authentication/Action";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirmed password is required"),
});

function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const initialValues = {
    password: "",
    confirmedPassword: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    if (values.password === values.confirmedPassword) {
      console.log("yes its working....");
    }
    const data = { password: values.password, token };
    dispatch(resetPassword({ navigate, data }));
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div style={{ position: "relative" }}>
              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <span
                      style={{ cursor: "pointer", position: "absolute", right: 10, top: 18 }}
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? "👁️" : "👁️‍🗨️"}
                    </span>
                  ),
                }}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <div style={{ position: "relative" }}>
              <Field
                as={TextField}
                name="confirmedPassword"
                placeholder="Confirmed Password"
                type={showConfirmedPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <span
                      style={{ cursor: "pointer", position: "absolute", right: 10, top: 18 }}
                      onClick={() => setShowConfirmedPassword((prev) => !prev)}
                      aria-label={showConfirmedPassword ? "Hide password" : "Show password"}
                    >
                      {showConfirmedPassword ? "👁️" : "👁️‍🗨️"}
                    </span>
                  ),
                }}
              />
              <ErrorMessage
                name="confirmedPassword"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <Button
            sx={{ padding: ".8rem 0rem" }}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Reset Password
          </Button>
        </Form>
      </Formik>
    </>
  );
}

export default ResetPasswordForm;
