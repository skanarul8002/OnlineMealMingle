import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Typography,
  CssBaseline,
  Container,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../State/Authentication/Action";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 8 characters")
    .required("Password is required"),
    role: Yup.string().required("Type is required"),
});

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSubmit = (values) => {
    
    

    console.log("Form values:", values);
    dispatch(registerUser({userData:values,navigate}))
  };

  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography className="text-center" variant="h5">
          Register
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
              label="Full Name"
              name="fullName"
              id="fullName"
              autoComplete="fullName"
              helperText={<ErrorMessage name="fullName" />}
            />
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
              <Field
              className="mt-3"
              as={Select}
              variant="outlined"
              margin="normal"
              fullWidth
              name="role"
              id="role"
              // autoComplete="role"
              helperText={<ErrorMessage name="role" />}
            >
              <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
              <MenuItem value="ROLE_RESTAURANT_OWNER">Restaurant Owner</MenuItem>
            </Field>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Register
            </Button>
          </Form>
        </Formik>
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Already have an account ?{" "}
          <Button onClick={() => navigate("/account/login")}>Login</Button>
        </Typography>
      </div>
    </Container>
  );
};

export default RegistrationForm;
