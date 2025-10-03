import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Typography,
  CssBaseline,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../State/Authentication/Action";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    // You can handle login submission here, e.g., send data to your server
    console.log("Login form values:", values);
    dispatch(loginUser({ data: values, navigate }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography className="text-center" variant="h5">
          Login
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email Address"
              name="email"
              id="email"
              autoComplete="email"
              helperText={<ErrorMessage name="email" />}
            />
            <div style={{ position: "relative" }}>
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                helperText={<ErrorMessage name="password" />}
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
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2,padding:"1rem" }}
            >
              Login
            </Button>
          </Form>
        </Formik>
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Don't have an account?{" "}
          <Button onClick={() => navigate("/account/register")}>
            Register
          </Button>
        </Typography>
      </div>
    </Container>
  );
};

export default LoginForm;
