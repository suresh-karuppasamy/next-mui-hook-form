export const VALIDATION = {
    ALPHABETS_SPACE: /^[a-zA-Z ]*$/,
    PASSWORD_REGEX:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    NUMBER_WITH_DECIMAL: /^\d*\.?\d{0,2}$/,
    EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  };