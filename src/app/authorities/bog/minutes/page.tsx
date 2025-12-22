import MinutesPage, {
  MinutesEntry,
  MinutesSection,
} from '../../components/MinutesPage';

const bogMinutes: MinutesEntry[] = [
  {
    serial: 1,
    particulars: '62nd meeting of the Board of Governors',
    date: '30.08.2024',
  },
  {
    serial: 2,
    particulars: '61st meeting of the Board of Governors',
    date: '30.03.2024',
  },
  {
    serial: 3,
    particulars: '60th meeting of the Board of Governors',
    date: '17.11.2023',
  },
  {
    serial: 4,
    particulars: '59th meeting of the Board of Governors',
    date: '25.03.2023',
  },
  {
    serial: 5,
    particulars: '58th meeting of the Board of Governors',
    date: '15.12.2022',
  },
  {
    serial: 6,
    particulars: '57th meeting of the Board of Governors',
    date: '27.09.2022',
  },
  {
    serial: 7,
    particulars: '56th meeting of the Board of Governors',
    date: '31.03.2022',
  },
  {
    serial: 8,
    particulars: '55th meeting of the Board of Governors',
    date: '23.12.2021',
  },
  {
    serial: 9,
    particulars: '54th meeting of the Board of Governors',
    date: '18.09.2021',
  },
  {
    serial: 10,
    particulars: '53rd meeting of the Board of Governors',
    date: '05.12.2020',
  },
  {
    serial: 11,
    particulars: '52nd meeting of the Board of Governors',
    date: '26.09.2020',
  },
  {
    serial: 12,
    particulars: '51st meeting of the Board of Governors',
    date: '20.08.2020',
  },
  {
    serial: 13,
    particulars: '50th meeting of the Board of Governors',
    date: '12.06.2020',
  },
  {
    serial: 14,
    particulars: '49th meeting of the Board of Governors',
    date: '28.03.2020',
  },
  {
    serial: 15,
    particulars: '48th meeting of the Board of Governors',
    date: '21.12.2019',
  },
  {
    serial: 16,
    particulars: '47th meeting of the Board of Governors',
    date: '19.09.2019',
  },
  {
    serial: 17,
    particulars: '46th meeting of the Board of Governors',
    date: '10.06.2019',
  },
  {
    serial: 18,
    particulars: '45th meeting of the Board of Governors',
    date: '21.12.2018',
  },
  {
    serial: 19,
    particulars: '44th meeting of the Board of Governors',
    date: '19.09.2018',
  },
  {
    serial: 20,
    particulars: '43rd meeting of the Board of Governors',
    date: '23.06.2018',
  },
  {
    serial: 21,
    particulars: '42nd meeting of the Board of Governors',
    date: '15.12.2017',
  },
  {
    serial: 22,
    particulars: '41st meeting of the Board of Governors',
    date: '16.09.2017',
  },
  {
    serial: 23,
    particulars: '40th meeting of the Board of Governors',
    date: '17.06.2017',
  },
  {
    serial: 24,
    particulars: '39th meeting of the Board of Governors',
    date: '29.04.2017',
  },
  {
    serial: 25,
    particulars: '38th meeting of the Board of Governors',
    date: '11.03.2017',
  },
  {
    serial: 26,
    particulars: '37th meeting of the Board of Governors',
    date: '26.11.2016',
  },
  {
    serial: 27,
    particulars: '36th meeting of the Board of Governors',
    date: '20.08.2016',
  },
  {
    serial: 28,
    particulars: '35th meeting of the Board of Governors',
    date: '23.07.2016',
  },
  {
    serial: 29,
    particulars: '34th meeting of the Board of Governors',
    date: '11.06.2016',
  },
  {
    serial: 30,
    particulars: '33rd meeting of the Board of Governors',
    date: '23.04.2016',
  },
  {
    serial: 31,
    particulars: '32nd meeting of the Board of Governors',
    date: '19.03.2016',
  },
  {
    serial: 32,
    particulars: '31st meeting of the Board of Governors',
    date: '12.12.2015',
  },
  {
    serial: 33,
    particulars: '30th meeting of the Board of Governors',
    date: '19.09.2015',
  },
  {
    serial: 34,
    particulars: '29th meeting of the Board of Governors',
    date: '11.07.2015',
  },
  {
    serial: 35,
    particulars: '28th meeting of the Board of Governors',
    date: '29.06.2015',
  },
  {
    serial: 36,
    particulars: '27th meeting of the Board of Governors',
    date: '27.04.2015',
  },
  {
    serial: 37,
    particulars: '26th meeting of the Board of Governors',
    date: '09.02.2015',
  },
  {
    serial: 38,
    particulars: '25th meeting of the Board of Governors',
    date: '19.12.2014',
  },
  {
    serial: 39,
    particulars: '24th meeting of the Board of Governors',
    date: '22.11.2014',
  },
  {
    serial: 40,
    particulars: '23rd meeting of the Board of Governors',
    date: '29.09.2014',
  },
];

const specialBogMinutes: MinutesEntry[] = [
  {
    serial: 1,
    particulars: 'Minutes of 12th Special BoG Meeting',
    date: '14.10.2024',
  },
  {
    serial: 2,
    particulars: 'Minutes of 11th Special BoG Meeting',
    date: '29.04.2024',
  },
  {
    serial: 3,
    particulars: 'Minutes of 10th Special BoG Meeting',
    date: '09.02.2024',
  },
  {
    serial: 4,
    particulars: 'Minutes of 9th Special BoG Meeting',
    date: '23.12.2023',
  },
  {
    serial: 5,
    particulars: 'Minutes of 8th Special BoG Meeting',
    date: '21.10.2023',
  },
  {
    serial: 6,
    particulars: 'Minutes of 7th Special BoG Meeting',
    date: '01.03.2023',
  },
  {
    serial: 7,
    particulars: 'Minutes of 6th Special BoG Meeting',
    date: '20.08.2022',
  },
  {
    serial: 8,
    particulars: 'Minutes of 5th Special BoG Meeting',
    date: '04.07.2022',
  },
  {
    serial: 9,
    particulars: 'Minutes of 4th Special BoG Meeting',
    date: '31.08.2022',
  },
  {
    serial: 10,
    particulars: 'Minutes of 3rd Special BoG Meeting',
    date: '01.08.2022',
  },
  {
    serial: 11,
    particulars: 'Minutes of 2nd Special BoG Meeting',
    date: '05.07.2022',
  },
  {
    serial: 12,
    particulars: 'Minutes of 1st Special BoG Meeting',
    date: '14.03.2022',
  },
];

export default function BogMinutesPage() {
  const main: MinutesSection = {
    title: 'Minutes of the Meetings of the Board of Governors',
    data: bogMinutes,
  };

  const extras: MinutesSection[] = [
    {
      title: 'Minutes of the Meetings of Special BoG',
      data: specialBogMinutes,
    },
  ];

  return <MinutesPage title="Minutes of BoG" main={main} extras={extras} />;
}
