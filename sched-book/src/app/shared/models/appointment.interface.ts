export interface Appointment {
  id: string;
  apptDate: Date;
  startTime: Date;
  endTime: Date;
  clientId: string;
  clientName: string;
  clientPhoneNumber: string;
  nailServices: string[];
  assignedEmployees: string[];
  notes: string;
}
