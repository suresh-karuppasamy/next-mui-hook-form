import React from "react";
import {
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface FormTextFieldProps {
  name: string;
  register?: UseFormRegister<FieldValues>;
  label?: string;
  handleOnChange?: (data?: any) => void;
  type?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  errors?: Record<string, any>; // to handle error messages from useForm
}

const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  register,
  label,
  handleOnChange,
  type = "text",
  fullWidth = true,
  disabled = false,
  errors,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      {label && (
        <Typography
          className="uppercase label"
          sx={{ marginBottom: "1rem", fontSize: "12px", fontFamily: "Poppins" }}
        >
          {label}
        </Typography>
      )}

      <TextField
        {...(register ? register(name) : {})} // Register the field with react-hook-form
        {...props}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        fullWidth={fullWidth}
        disabled={disabled}
        onChange={(event) => {
          if (handleOnChange) {
            handleOnChange(event.target.value);
          }
        }}
        error={!!errors?.[name]} // Check if the field has an error
        helperText={errors?.[name]?.message} // Display the error message
        InputProps={{
          endAdornment:
            type === "password" ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
        autoComplete="off"
        sx={{
          "& .MuiOutlinedInput-input": {
            padding: "13.5px 14px",
          },
        }}
      />
    </>
  );
};

export default FormTextField;
