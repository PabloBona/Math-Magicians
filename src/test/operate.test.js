import operate from '../logic/operate';

describe('testing mathematical operations', () => {
  test('addition test', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('subtraction test', () => {
    expect(operate(4, 2, '-')).toBe('2');
  });

  test('multiplication test', () => {
    expect(operate(5, 3, 'x')).toBe('15');
  });

  test('division test', () => {
    expect(operate(20, 4, '÷')).toBe('5');
  });

  test('zero division test', () => {
    expect(operate(18, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('mod test', () => {
    expect(operate(14, 3, '%')).toBe('2');
  });

  test('zero mod test', () => {
    expect(operate(14, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('throws error for unknown operation', () => {
    expect(() => {
      operate('2', '3', '^');
    }).toThrow("Unknown operation '^'");
  });
});
