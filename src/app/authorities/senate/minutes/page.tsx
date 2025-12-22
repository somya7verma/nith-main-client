import MinutesPage, { MinutesEntry } from '../../components/MinutesPage';

const senateMinutes: MinutesEntry[] = [
  { serial: 1, particulars: '41st meeting of Senate', date: '14.10.2024' },
  { serial: 2, particulars: '40th meeting of Senate', date: '19.07.2024' },
  { serial: 3, particulars: '39th meeting of Senate', date: '22.09.2023' },
  { serial: 4, particulars: '38th meeting of Senate', date: '29.05.2023' },
  { serial: 5, particulars: '37th meeting of Senate', date: '18.10.2022' },
  { serial: 6, particulars: '36th meeting of Senate', date: '11.05.2022' },
  { serial: 7, particulars: '35th meeting of Senate', date: '28.09.2021' },
  { serial: 8, particulars: '34th meeting of Senate', date: '07.09.2021' },
  { serial: 9, particulars: '33rd meeting of Senate', date: '09.08.2020' },
  { serial: 10, particulars: '32nd meeting of Senate', date: '09.07.2020' },
  { serial: 11, particulars: '31st meeting of Senate', date: '04.06.2020' },
  {
    serial: 12,
    particulars: 'Minutes of 1st Emergent SENATE',
    date: '22.05.2020',
  },
  { serial: 13, particulars: '30th meeting of Senate', date: '14.12.2019' },
  { serial: 14, particulars: '29th meeting of Senate', date: '11.10.2019' },
  { serial: 15, particulars: '28th meeting of Senate', date: '19.07.2019' },
  { serial: 16, particulars: '27th meeting of Senate', date: '30.05.2019' },
  { serial: 17, particulars: '26th meeting of Senate', date: '12.10.2018' },
  { serial: 18, particulars: '25th meeting of Senate', date: '05.06.2018' },
  { serial: 19, particulars: '24th meeting of Senate', date: '17.03.2016' },
  { serial: 20, particulars: '23rd meeting of Senate', date: '26.10.2015' },
  { serial: 21, particulars: '22nd meeting of Senate', date: '07.04.2015' },
  { serial: 22, particulars: '21st meeting of Senate', date: '22.07.2014' },
  { serial: 23, particulars: '20th meeting of Senate', date: '17.10.2013' },
  { serial: 24, particulars: '19th meeting of Senate', date: '04.06.2013' },
  { serial: 25, particulars: '18th meeting of Senate', date: '10.09.2012' },
  { serial: 26, particulars: '17th meeting of Senate', date: '05.06.2012' },
  { serial: 27, particulars: '16th meeting of Senate', date: '20.09.2011' },
  { serial: 28, particulars: '15th meeting of Senate', date: '28.07.2011' },
  { serial: 29, particulars: '14th meeting of Senate', date: '23.10.2010' },
  { serial: 30, particulars: '13th meeting of Senate', date: '17.04.2010' },
  { serial: 31, particulars: '12th meeting of Senate', date: '10.08.2009' },
  { serial: 32, particulars: '11th meeting of Senate', date: '30.10.2008' },
  { serial: 33, particulars: '10th meeting of Senate', date: '22.07.2008' },
  { serial: 34, particulars: '9th meeting of Senate', date: '08.12.2007' },
  { serial: 35, particulars: '8th meeting of Senate', date: '22.06.2007' },
  { serial: 36, particulars: '7th meeting of Senate', date: '21.05.2006' },
  { serial: 37, particulars: '6th meeting of Senate', date: '30.05.2005' },
  { serial: 38, particulars: '5th meeting of Senate', date: '04.11.2004' },
  { serial: 39, particulars: '4th meeting of Senate', date: '30.12.2003' },
  { serial: 40, particulars: '3rd meeting of Senate', date: '—' },
];

export default function SenateMinutesPage() {
  return (
    <MinutesPage
      title="Minutes of Senate"
      main={{ title: 'Minutes of the Senate', data: senateMinutes }}
    />
  );
}
