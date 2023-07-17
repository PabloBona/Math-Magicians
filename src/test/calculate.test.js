import calculate from '../logic/calculate';

describe('Testing calculate functions', () => {
  // testing AC button clean the obj prop
  test('Press AC and the obj becomes null', () => {
    expect(calculate({ total: 1, next: 1, operation: '+' }, 'AC')).toEqual({ next: null, operation: null, total: null });
  });

  test('If there is an operation, update next', () => {
    expect(calculate({ total: null, next: 2, operation: '+' }, '0')).toEqual({ next: '20', operation: '+', total: null });
  });

  test('If there is no operation, update next and clear the value', () => {
    expect(calculate({ total: null, next: 2, operation: null }, '3')).toEqual({ next: '23', total: null });
  });

  // ----------------------- Dot buton test -----------------------------------------
  test('If press . create a floating number', () => {
    expect(calculate({ total: null, next: '1', operation: null }, '.')).toEqual({ next: '1.', operation: null, total: null });
  });

  test('If press . twice, and the floating number already exist', () => {
    expect(calculate({ total: null, next: '1.0', operation: null }, '.')).toEqual({ next: '1.0', operation: null, total: null });
  });

  // ----------------------- Iqual buton test -----------------------------------------
  test('If press = and operator exist return value', () => {
    expect(calculate({ total: 2, next: 1, operation: '+' }, '=')).toEqual({ next: null, operation: null, total: '3' });
  });
  // iqual button with no operator
  test('If press = and operator does not exist return empty', () => {
    expect(calculate({ total: 2, next: 1, operation: null }, '=')).toEqual({});
  });

  // ----------------------- possitive/negative buton test -----------------------------------------
  test('If press +/- return reverse of next', () => {
    expect(calculate({ total: null, next: 1, operation: null }, '+/-')).toEqual({ next: '-1', operation: null, total: null });
  });
  test('If press +/- return reverse of total', () => {
    expect(calculate({ total: 1, next: null, operation: null }, '+/-')).toEqual({ next: null, operation: null, total: '-1' });
  });

  // ----------------------- pressing operator after iqual -----------------------------------------
  test('pressing operator after iqual', () => {
    expect(calculate({ total: 10, next: null, operation: null }, '+')).toEqual({ next: null, operation: '+', total: 10 });
  });

  // ----------------------- pressing operator after operation ------------------------------------
  test('User pressed an operation button and there is an existing operation', () => {
    expect(calculate({ total: 10, next: null, operation: '+' }, '-')).toEqual({ next: null, operation: '-', total: 10 });
  });

  // ----------------------- no number added but user pressed an opetarion ------------------------
  test('User pressed an operation button and there is an existing operation', () => {
    expect(calculate({ total: null, next: null, operation: null }, '-')).toEqual({ operation: '-' });
  });

  //----------------------------------------------------------------
  test('save the operation and shift next into total', () => {
    expect(calculate({ total: null, next: 10, operation: null }, '+')).toEqual({ next: null, operation: '+', total: 10 });
  });
});
