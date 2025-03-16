// test/createValidationRegex.test.js
import { createPasswordRegex, createEmailRegex, createPhoneNumberRegex, createDateRegex } from '../src/createValidationRegex';

test('should generate valid regex for password validation', () => {
  const regex = createPasswordRegex({
    minLength: 8,
    uppercase: true,
    lowercase: true,
    digits: true,
    specialChar: true,
  });
  expect(new RegExp(regex).test('Password123!')).toBe(true);
});

test('should generate valid regex for email validation', () => {
  const regex = createEmailRegex();
  expect(regex.test('test@example.com')).toBe(true);
});

test('should generate valid regex for phone number validation', () => {
  const regex = createPhoneNumberRegex();
  expect(regex.test('+1234567890')).toBe(true);
});

test('should generate valid regex for date validation', () => {
  const regex = createDateRegex();
  expect(regex.test('2025-03-16')).toBe(true);
});
