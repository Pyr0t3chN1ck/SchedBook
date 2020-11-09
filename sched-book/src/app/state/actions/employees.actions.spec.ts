import * as fromEmployees from './employees.actions';

describe('loadEmployeess', () => {
  it('should return an action', () => {
    expect(fromEmployees.loadEmployeess().type).toBe('[Employees] Load Employeess');
  });
});
