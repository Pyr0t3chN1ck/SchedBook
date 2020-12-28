import { Employee } from './employee.interface';
import { NailService } from './nail-service.interface';

export interface AppointmentCreatePayload {
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
