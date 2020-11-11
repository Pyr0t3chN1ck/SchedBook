export interface AppointmentCreatePayload {
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
