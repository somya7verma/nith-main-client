// Common event types
export type EventType = {
  id: number;
  title: string;
  description: string;
  date: string;
  venue: string;
  file: string;
    fileUrl?: string;
  
};

export type EventInput = Omit<EventType, 'id'>;
