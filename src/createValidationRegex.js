// src/createValidationRegex.js

const createPasswordRegex = ({ minLength, uppercase, lowercase, digits, specialChar }) => {
  let pattern = '^';

  if (minLength) {
    pattern += `(?=.{${minLength},})`;  // 최소 길이
  }

  if (uppercase) {
    pattern += '(?=.*[A-Z])';  // 대문자 포함
  }

  if (lowercase) {
    pattern += '(?=.*[a-z])';  // 소문자 포함
  }

  if (digits) {
    pattern += '(?=.*\\d)';  // 숫자 포함
  }

  if (specialChar) {
    pattern += '(?=.*[!@#$%^&*(),.?":{}|<>])';  // 특수문자 포함
  }

  pattern += '[A-Za-z\\d!@#$%^&*(),.?":{}|<>]+$'; // 가능한 문자 (대소문자, 숫자, 특수문자)

  return pattern;
};

const createEmailRegex = () => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
};

const createPhoneNumberRegex = () => {
  return /^0[1-9]\d{8,9}$/;
};

const createDateRegex = () => {
  return /^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/;
};

export { createPasswordRegex, createEmailRegex, createPhoneNumberRegex, createDateRegex };
