import { Employee } from './employee.interface';
import { NailService } from './nail-service.interface';

export interface Appointment {
  id: string;
  apptDate: Date;
  startTime: Date;
  endTime: Date;
  clientId: string;
  clientName: string;
  clientPhoneNumber: string;
  nailServices: string[];
  assignedEmployee: string;
  notes: string;
}
