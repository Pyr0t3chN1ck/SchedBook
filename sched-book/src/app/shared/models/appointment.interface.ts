import { NailService } from '.';
import { Employee } from './employee.interface';

export interface Appointment {
  id: string;
  apptDate: Date;
  startTime: Date;
  endTime: Date;
  clientId: string;
  clientName: string;
  clientPhoneNumber: string;
  nailServices: NailService[];
  assignedEmployees: Employee[];
  notes: string;
}
