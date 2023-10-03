const { formatPhoneNumber } = require('../src/index');

/**
 * test suite for the formatPhoneNumber function.
 */
describe('formatPhoneNumber', () => {
  /**
   * test case: should correctly format valid 10-digit phone numbers
   */
  it('should format valid 10-digit phone numbers', () => {
    expect(formatPhoneNumber('0123456789')).toBe('(012) 345-6789');
    expect(formatPhoneNumber('4155448375')).toBe('(415) 544-8375');
  });

  /**
   * test case: should throw an error for phone numbers with less than 10 digits
   */
  it('should throw an error for phone numbers with less than 10 digits', () => {
    expect(() => formatPhoneNumber('153158935')).toThrow('Invalid phone number format. It must be 10 digits.');
  });

  /**
   * test case: should throw an error for phone numbers with more than 10 digits
   */
  it('should throw an error for phone numbers with more than 10 digits', () => {
    expect(() => formatPhoneNumber('01234567890')).toThrow('Invalid phone number format. It must be 10 digits.');
  });

  /**
   * test case: should throw an error for phone numbers with non-numeric characters
   */
  it('should throw an error for phone numbers with non-numeric characters', () => {
    expect(() => formatPhoneNumber('abc')).toThrow('Invalid phone number format. It must be 10 digits.');
  });

  /**
   * test case: should throw an error for empty input
   */
  it('should throw an error for empty input', () => {
    expect(() => formatPhoneNumber('')).toThrow('Invalid phone number format. It must be 10 digits.');
    expect(() => formatPhoneNumber(null)).toThrow('Invalid phone number format. It must be 10 digits.');
    expect(() => formatPhoneNumber(undefined)).toThrow('Invalid phone number format. It must be 10 digits.');
  });

  /**
   * test case: should throw an error for input containing floats
   */
  it('should throw an error for input containing floats', () => {
    expect(() => formatPhoneNumber('0.123456789')).toThrow('Invalid phone number format. It must be 10 digits.');
  });
});

