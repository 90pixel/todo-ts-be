import type { UserInterface } from './User';

export enum Status {
  OPEN,
  CLOSE,
}

export enum LoopIntervals {
  DAILY,
  WEEKLY,
  MONTHLY,
  YEARLY,
}

export interface TodoInteface {
  title: string;
  content: string;
  status: Status;
  tags: Pick<UserInterface, 'tags'>;
  dueDate: Date;
  reminder: {
    date: Date;
    loop: LoopIntervals;
  };
  createdAt: Date;
  updatedAt: Date;
}
