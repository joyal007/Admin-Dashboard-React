import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, TextField, Box } from "@mui/material";
import Header from "../../components/Header";
import { useMediaQuery,useTheme } from "@mui/material";
import {tokens} from '../../theme'

function ProfileForm() {
  const isNotMobile = useMediaQuery("(min-width:600px)");
  const phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const handleFormSubmit = (value) => {
    console.log("values", value);
  };
  const initValue = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
  };
  const validateSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    phone: yup
      .string()
      .matches(phoneReg, "invalid phone number")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });
  return (
    <div>
      <Box m="20px">
        <Header title="Create User" subtitle="Create a New User Profile" />
        <Formik
          
          onSubmit={handleFormSubmit}
          initialValues={initValue}
          validationSchema={validateSchema}
        >
          {({
            handleBlur,
            handleSubmit,
            handleChange,
            values,
            errors,
            touched
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Box
                  mt="20px"
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4,minmax(0,1fr))"
                  sx={{
                    "& > div": {
                      backgroundColor: colors.primary[400],
                      gridColumn: isNotMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={!!errors.firstName && !!touched.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{
                      gridColumn: "span 2",
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={!!errors.lastName && !!touched.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{
                      gridColumn: "span 2",
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!errors.email && !!touched.email}
                    helperText={touched.email && errors.email}
                    sx={{
                      gridColumn: "span 4",
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    name="phone"
                    error={!!errors.phone && !!touched.phone}
                    helperText={touched.phone && errors.phone}
                    sx={{
                      gridColumn: "span 4",
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address 1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address1}
                    name="address1"
                    error={!!errors.address1 && !!touched.address1}
                    helperText={touched.address1 && errors.address1}
                    sx={{
                      gridColumn: "span 4",
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address 2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address2}
                    name="address2"
                    error={!!errors.address2 && !!touched.address2}
                    helperText={touched.address2 && errors.address2}
                    sx={{
                      gridColumn: "span 4",
                    }}
                  />
                </Box>
                <Box display='flex' justifyContent="end" mt='20px'>
                  <Button type='submit' variant='contained' color="secondary" sx={{color: colors.primary[600]}} >
                    Create a New User
                  </Button>
                </Box>
              </form>
            );
          }}
        </Formik>
      </Box>
    </div>
  );
}

export default ProfileForm;
