export interface Student {
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
  uuid: string;
  description: string;
}

export interface HomeworkFile {
  url: string;
  student: Student;
  homework: Homework;
}