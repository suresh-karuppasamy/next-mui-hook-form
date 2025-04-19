import React from "react";
import {
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface FormTextFieldProps<T extends FieldValues> {
  name: string;
  register: UseFormRegister<any>;
  label?: string;
  handleOnChange?: (data?: any) => void;
  type?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  errors?: Record<string, any>; // Handle error messages from useForm
}

const FormTextField = <T extends FieldValues>({
  name,
  register,
  label,
  handleOnChange,
  type = "text",
  fullWidth = true,
  disabled = false,
  errors,
  ...props
}: FormTextFieldProps<T>) => {
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
        {...register(name)}
        {...props}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        fullWidth={fullWidth}
        disabled={disabled}
        onChange={(event:any) => {
          if (handleOnChange) {
            handleOnChange(event.target.value);
          }
        }}
        error={!!errors?.[name as string]}
        helperText={errors?.[name as string]?.message}
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
