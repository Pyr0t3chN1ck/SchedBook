import { Employee } from './employee.interface';
import { NailService } from './nail-service.interface';

export interface Appointment {
    apptDate: Date;
    startTime: Date;
    endTime: Date;
    clientId: string;
    clientName: string;
    clientPhoneNumber: string;
    nailServices: NailService[];
    assignedEmployee: Employee;
    notes: string;
}
