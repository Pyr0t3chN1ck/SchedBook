import { createAction, props } from '@ngrx/store';
import { EmployeeCreatePayload } from 'src/app/shared/models/employee-create-payload.interface';
import { EmployeeEntity } from '../reducers/employees.reducer';

let currentId = 1;

// Loading employee actions
export const loadEmployees = createAction(
  '[employees] loading employee data'
);

export const loadEmployeesSucceess = createAction(
  '[employees] loaded employee data successfully',
  props<{ payload: EmployeeEntity[] }>()
);

export const loadEmployeesFail = createAction(
  '[employees] loading employee data failed',
  props<{ message: string }>()
);


// Adding employee actions
export const addEmployee = createAction(
  '[employees] adding employee',
  ({ firstName, lastName }: EmployeeCreatePayload) => ({
    payload: {
      id: 'E' + currentId++,
      firstName,
      lastName,
      isDeleted: false
    } as EmployeeEntity
  })
);

export const addEmployeeSuccess = createAction(
  '[employees] employee added successfully',
  props<{ oldId: string, payload: EmployeeEntity }>()
);

export const addEmployeeFail = createAction(
  '[employees] employee added failed',
  props<{ message: string, payload: EmployeeEntity }>()
);

// Update employee actions
export const updateEmployee = createAction(
  '[employees] updating employee data',
  props<{
    payload: {
      id: string,
      firstName: string,
      lastName: string,
      oldValues: { firstName: string, lastName: string }
    }
  }>()
);

export const updateEmployeeSucceess = createAction(
  '[employees] updated employee data successfully'
);

export const updateEmployeeFail = createAction(
  '[employees] updating employee data failed',
  props<{
    message: string,
    payload: {
      id: string,
      firstName: string,
      lastName: string,
      oldValues: { firstName: string, lastName: string }
    }
  }>()
);

// Delete employee actions
export const markEmployeeDeleted = createAction(
  '[employees] marking employee as deleted',
  props<{ id: string }>()
);

export const markEmployeeDeletedSuccess = createAction(
  '[employees] marking employee as deleted success'
);

export const markEmployeeDeletedFail = createAction(
  '[employees] marking employee as deleted failed',
  props<{ id: string }>()
);
