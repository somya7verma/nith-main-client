export type DirectorOfficeEntry = {
  slNo: number;
  name: string;
  designation: string;
  phone: string;
  email: string;
};

export const director: DirectorOfficeEntry = {
  slNo: 1,
  name: 'Prof. Hiralal Murlidhar Suryawanshi',
  designation: 'Director',
  phone: '222308, 254001',
  email: 'director@nith.ac.in',
};

export const officeStaff: DirectorOfficeEntry[] = [
  {
    slNo: 1,
    name: 'Ms. Sangeeta Anand (on Deputation)',
    designation: 'Stenographer SG-II (Private Secretary)',
    phone: '254001, 222308',
    email: 'psd@nith.ac.in',
  },
  {
    slNo: 2,
    name: 'Sh. Vikas Dogra',
    designation: 'Assistant SG-II(PA)',
    phone: '254001, 222308',
    email: 'vikasdogra@nith.ac.in',
  },
  {
    slNo: 3,
    name: 'Sh. Ramesh Chand-I',
    designation: 'Sr. Office Attendant SG-I',
    phone: '254001, 222308',
    email: '--',
  },
  {
    slNo: 4,
    name: 'Ms. Smriti',
    designation: 'Senior Technician',
    phone: '--',
    email: '--',
  },
];
