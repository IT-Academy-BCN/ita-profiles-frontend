export interface Tag {
  id: number;
  name: string;
}

export interface Student {
	fullname: string;
	subtitle: string;
	photo: string;
	tags: Tag[];
}

export interface State {
	students: Student[];
	filters: string[];
	isUserPanelOpen: boolean;
  }