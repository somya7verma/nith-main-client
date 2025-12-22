import MinutesPage, { MinutesEntry } from '../../components/MinutesPage';

const fcMinutes: MinutesEntry[] = [
  {
    serial: 1,
    particulars: '44th meeting of the Finance Committee',
    date: '30.05.2024',
  },
  {
    serial: 2,
    particulars: '43th meeting of the Finance Committee',
    date: '06.03.2024',
  },
  {
    serial: 3,
    particulars: '42nd meeting of the Finance Committee',
    date: '17.11.2023',
  },
  {
    serial: 4,
    particulars: '41st meeting of the Finance Committee',
    date: '20.03.2023',
  },
  {
    serial: 5,
    particulars: '40th meeting of the Finance Committee',
    date: '15.12.2022',
  },
  {
    serial: 6,
    particulars: '39th meeting of the Finance Committee',
    date: '12.04.2022',
  },
  {
    serial: 7,
    particulars: '38th meeting of the Finance Committee',
    date: '30.12.2021',
  },
  {
    serial: 8,
    particulars: '37th meeting of the Finance Committee',
    date: '18.06.2021',
  },
  {
    serial: 9,
    particulars: '36th meeting of the Finance Committee',
    date: '09.03.2021',
  },
  {
    serial: 10,
    particulars: '35th meeting of the Finance Committee',
    date: '15.01.2021',
  },
  {
    serial: 11,
    particulars: '34th meeting of the Finance Committee',
    date: '10.09.2020',
  },
  {
    serial: 12,
    particulars: '33rd meeting of the Finance Committee',
    date: '12.06.2020',
  },
  {
    serial: 13,
    particulars: '32nd meeting of the Finance Committee',
    date: '23.01.2020',
  },
  {
    serial: 14,
    particulars: '31th meeting of the Finance Committee',
    date: '21.09.2019',
  },
  {
    serial: 15,
    particulars: '30th meeting of the Finance Committee',
    date: '17.08.2019',
  },
  {
    serial: 16,
    particulars: '29th meeting of the Finance Committee',
    date: '03.05.2019',
  },
  {
    serial: 17,
    particulars: '28th meeting of the Finance Committee',
    date: '05.01.2019',
  },
  {
    serial: 18,
    particulars: '27th meeting of the Finance Committee',
    date: '17.11.2018',
  },
  {
    serial: 19,
    particulars: '26th meeting of the Finance Committee',
    date: '07.09.2018',
  },
  {
    serial: 20,
    particulars: '25th meeting of the Finance Committee',
    date: '14.06.2018',
  },
  {
    serial: 21,
    particulars: '24th meeting of the Finance Committee',
    date: '13.11.2017',
  },
  {
    serial: 22,
    particulars: '23rd meeting of the Finance Committee',
    date: '13.12.2016',
  },
  {
    serial: 23,
    particulars: '22nd meeting of the Finance Committee',
    date: '30.09.2016',
  },
  {
    serial: 24,
    particulars: '21st meeting of the Finance Committee',
    date: '21.03.2016',
  },
  {
    serial: 25,
    particulars: '20th meeting of the Finance Committee',
    date: '11.07.2015',
  },
  {
    serial: 26,
    particulars: '19th meeting of the Finance Committee',
    date: '18.03.2015',
  },
  {
    serial: 27,
    particulars: '18th meeting of the Finance Committee',
    date: '05.12.2014',
  },
  {
    serial: 28,
    particulars: '17th meeting of the Finance Committee',
    date: '27.07.2014',
  },
  {
    serial: 29,
    particulars: '16th meeting of the Finance Committee',
    date: '26.02.2014',
  },
  {
    serial: 30,
    particulars: '15th meeting of the Finance Committee',
    date: '19.10.2013',
  },
  {
    serial: 31,
    particulars: '14th meeting of the Finance Committee',
    date: '15.12.2012',
  },
  {
    serial: 32,
    particulars: '13th meeting of the Finance Committee',
    date: '20.04.2011',
  },
  {
    serial: 33,
    particulars: '12th meeting of the Finance Committee',
    date: '02.12.2010',
  },
  {
    serial: 34,
    particulars: '11th meeting of the Finance Committee',
    date: '07.05.2010',
  },
  {
    serial: 35,
    particulars: '10th meeting of the Finance Committee',
    date: '21.11.2009',
  },
  {
    serial: 36,
    particulars: '9th meeting of the Finance Committee',
    date: '13.06.2009',
  },
  {
    serial: 37,
    particulars: '8th meeting of the Finance Committee',
    date: '15.12.2008',
  },
];

export default function FcMinutesPage() {
  return (
    <MinutesPage
      title="Minutes of FC"
      main={{ title: 'Minutes of the Finance Committee', data: fcMinutes }}
    />
  );
}
