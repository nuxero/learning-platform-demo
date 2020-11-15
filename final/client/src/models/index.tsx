export interface Student {
  id: number;
  phoneNumber: string;
  firstName: string;
  lastName: string;
}

export interface StudentData {
  students: Student[]
}

export interface StudentVars {
  phoneNumber: string;
  firstName: string;
  lastName: string;
}

export interface VideoSessionParams {
  uuid: string
}

export interface StudentListAction {
  actionName: string;
  onAction: (student: Student) => void
}

export interface StudentListProps {
  actions?: StudentListAction[]
}

export interface Homework {
  id: number;
  uuid: string;
  description: string;
}

export interface HomeworkFile {
  id: number;
  url: string;
  student: Student;
  homework: Homework;
}