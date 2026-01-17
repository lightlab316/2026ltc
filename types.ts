
export interface ItineraryItem {
  time: string;
  activity: string;
  location: string;
  note: string;
}

export interface DayPlan {
  day: number;
  date: string;
  weekday: string;
  items: ItineraryItem[];
  accommodation: string;
}

export interface RoomAssignment {
  roomNumber: string;
  roomType: string;
  occupants: string[];
}

export interface DutyPerson {
  day: string;
  meal: string;
  names: string[];
}

export interface StaffRole {
  role: string;
  person: string;
  task: string;
}

export interface FlightInfo {
  type: "去程" | "回程";
  date: string;
  time: string;
  route: string;
  terminal: string;
  flightNo: string;
  meeting: string;
}

export interface TravelNote {
  category: string;
  content: string[];
}

export interface TripData {
  title: string;
  subTitle: string;
  period: string;
  flights: FlightInfo[];
  staff: StaffRole[];
  duties: DutyPerson[];
  itinerary: DayPlan[];
  rooms: RoomAssignment[];
  essentials: string[];
  notes: TravelNote[];
}
