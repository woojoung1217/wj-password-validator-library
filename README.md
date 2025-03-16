# Password Validator Library

다양한 유효성 검사를 위한 정규식(RegExp)을 생성하는 JavaScript 라이브러리입니다.

[NPM](https://www.npmjs.com/package/wj-password-validator)

## 설치

```bash
npm install password-validator-library
```

## 사용법

### 비밀번호 유효성 검사

```javascript
import { createPasswordRegex } from "password-validator-library";

const options = {
  minLength: 8, // 최소 길이
  uppercase: true, // 대문자 포함
  lowercase: true, // 소문자 포함
  digits: true, // 숫자 포함
  specialChar: true, // 특수문자 포함
};

const passwordRegex = createPasswordRegex(options);
const isValid = new RegExp(passwordRegex).test("YourPassword123!");
```

### 이메일 유효성 검사

```javascript
import { createEmailRegex } from "password-validator-library";

const emailRegex = createEmailRegex();
const isValid = emailRegex.test("example@email.com");
```

### 전화번호 유효성 검사

```javascript
import { createPhoneNumberRegex } from "password-validator-library";

const phoneRegex = createPhoneNumberRegex();
const isValid = phoneRegex.test("+821012345678");
```

### 날짜 유효성 검사 (YYYY-MM-DD)

```javascript
import { createDateRegex } from "password-validator-library";

const dateRegex = createDateRegex();
const isValid = dateRegex.test("2024-03-20");
```

## 지원하는 기능

### 비밀번호 검증

- 최소 길이 설정
- 대문자 포함 여부
- 소문자 포함 여부
- 숫자 포함 여부
- 특수문자 포함 여부 (!@#$%^&\*(),.?":{}|<>)

### 기타 유효성 검사

- 이메일 주소 형식 검증
- 국제 전화번호 형식 검증 (E.164 형식)
- 날짜 형식 검증 (YYYY-MM-DD)


### 사용예시 


```javascript
// 예시: React 컴포넌트에서 라이브러리 사용하기

import React, { useState } from 'react';
import { createPasswordRegex, createEmailRegex, createPhoneNumberRegex, createDateRegex } from 'your-library-name';

const App = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');

  // 정규 표현식 생성
  const passwordRegex = createPasswordRegex({ minLength: 8, uppercase: true, lowercase: true, digits: true, specialChar: true });
  const emailRegex = createEmailRegex();
  const phoneNumberRegex = createPhoneNumberRegex();
  const dateRegex = createDateRegex();

  // 유효성 검사 함수
  const validatePassword = (password) => {
    return new RegExp(passwordRegex).test(password);
  };

  const validateEmail = (email) => {
    return new RegExp(emailRegex).test(email);
  };

  const validatePhoneNumber = (phone) => {
    return new RegExp(phoneNumberRegex).test(phone);
  };

  const validateDate = (date) => {
    return new RegExp(dateRegex).test(date);
  };

  return (
    <div>
      <h1>Form Validation Example</h1>
      
      {/* Password */}
      <input 
        type="password" 
        placeholder="Enter password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <p>Password valid: {validatePassword(password) ? 'Yes' : 'No'}</p>

      {/* Email */}
      <input 
        type="email" 
        placeholder="Enter email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <p>Email valid: {validateEmail(email) ? 'Yes' : 'No'}</p>

      {/* Phone Number */}
      <input 
        type="tel" 
        placeholder="Enter phone number" 
        value={phoneNumber} 
        onChange={(e) => setPhoneNumber(e.target.value)} 
      />
      <p>Phone Number valid: {validatePhoneNumber(phoneNumber) ? 'Yes' : 'No'}</p>

      {/* Date */}
      <input 
        type="date" 
        placeholder="Enter date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <p>Date valid: {validateDate(date) ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default App;



```

## 라이선스

MIT License
