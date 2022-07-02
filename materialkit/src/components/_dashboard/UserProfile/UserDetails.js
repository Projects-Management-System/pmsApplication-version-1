import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Card,
  Container,
  Grid,
  Typography
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------
const designations = [
  {
    value: 'Site Engineer',
    label: 'Site Engineer'
  }
];

const adminLevels = [
  {
    value: 'Admin',
    label: 'Admin'
  },
  {
    value: 'Moderator',
    label: 'Moderator'
  },
  {
    value: 'Editor',
    label: 'Editor'
  }
];

export default function UserDetails() {
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  // --------------------------------------------------
  // const userRole = localStorage.getItem('adminLevel');
  // // setQuery(userRole);
  // console.log(userRole);
  // --------------------------------------------------

  const [newPost, setNewPost] = useState({
    username: '',
    lastName: '',
    designation: '',
    adminLevel: '',
    email: '',
    contactNumber: ''
  });

  const { username, lastName, designation, adminLevel, email, contactNumber } = newPost;

  const onInputChange = (e) => {
    console.log(e.target.value);
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const email = localStorage.getItem('email');
    const result = await axiosInstance.get(`/userProfile?q=${email}`);
    setNewPost(result.data.posts[0]);
  };

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <Card>
      <Container>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate>
            <Stack spacing={3}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={0} />
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={0}>
                <Typography variant="body2" color="text.secondary">
                  Enter details of the user.
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={0}>
                <Typography variant="body2" color="red">
                  {error && <span className="error-message">{error}</span>}
                </Typography>
              </Stack>
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={4}
              >
                <TextField // --------------------------------------------------------------------------------------------
                  InputLabelProps={{ shrink: true }}
                  disabled
                  id="username"
                  size="small"
                  required="required"
                  fullWidth
                  type="Text"
                  label="First Name"
                  inputProps={{ style: { color: 'gray' } }}
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />

                <TextField // --------------------------------------------------------------------------------------------
                  InputLabelProps={{ shrink: true }}
                  disabled
                  id="lastName"
                  size="small"
                  required="required"
                  fullWidth
                  type="Text"
                  label="Last Name"
                  inputProps={{ style: { color: 'gray' } }}
                  name="lastName"
                  value={lastName}
                  onChange={(e) => onInputChange(e)}
                />
              </Stack>
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={4}
              >
                <TextField // ------------------------------------------------------------- --------------------------------
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  disabled
                  id="designation"
                  select
                  inputProps={{ style: { color: 'gray' } }}
                  label="Designation"
                  size="small"
                  name="designation"
                  value={designation}
                  onChange={(e) => onInputChange(e)}
                >
                  {designations.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      selected={designations === option.value ? 'selected' : ''}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField // ------------------------------------------------------------- --------------------------------
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  disabled
                  id="adminLevel"
                  select
                  inputProps={{ style: { color: 'gray' } }}
                  label="Privilege Level"
                  size="small"
                  name="adminLevel"
                  value={adminLevel}
                  onChange={(e) => onInputChange(e)}
                >
                  {adminLevels.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      selected={adminLevels === option.value ? 'selected' : ''}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={4}
              >
                <TextField // --------------------------------------------------------------------------------------------
                  InputLabelProps={{ shrink: true }}
                  disabled
                  id="email"
                  size="small"
                  required="required"
                  fullWidth
                  type="Text"
                  label="E-mail"
                  inputProps={{ style: { color: 'gray' } }}
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
                <TextField // --------------------------------------------------------------------------------------------
                  InputLabelProps={{ shrink: true }}
                  disabled
                  id="contactNumber"
                  size="small"
                  required="required"
                  fullWidth
                  type="Text"
                  label="Contact Number"
                  inputProps={{ style: { color: 'gray' } }}
                  name="contactNumber"
                  value={contactNumber}
                  onChange={(e) => onInputChange(e)}
                />
              </Stack>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4} />
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4} />
            </Stack>
          </Form>
        </FormikProvider>
      </Container>
    </Card>
  );
}
