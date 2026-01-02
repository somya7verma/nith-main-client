import MinutesPage, { MinutesEntry } from '../../components/MinutesPage';

const bwcMinutes: MinutesEntry[] = [
  { serial: 1, particulars: '37th meeting of the BWC', date: '17.01.2025' },
  { serial: 2, particulars: '36th meeting of the BWC', date: '19.09.2024' },
  { serial: 3, particulars: '35th meeting of the BWC', date: '11.12.2023' },
  { serial: 4, particulars: '34th meeting of the BWC', date: '29.09.2022' },
  { serial: 5, particulars: '33rd meeting of the BWC', date: '10.05.2022' },
  { serial: 6, particulars: '32nd meeting of the BWC', date: '08.03.2022' },
  { serial: 7, particulars: '31st meeting of the BWC', date: '21.12.2021' },
  { serial: 8, particulars: '30th meeting of the BWC', date: '17.12.2020' },
  { serial: 9, particulars: '29th meeting of the BWC', date: '17.12.2019' },
  { serial: 10, particulars: '28th meeting of the BWC', date: '20.07.2019' },
  { serial: 11, particulars: '27th meeting of the BWC', date: '25.03.2019' },
  { serial: 12, particulars: '26th meeting of the BWC', date: '06.06.2018' },
  { serial: 13, particulars: '25th meeting of the BWC', date: '23.02.2018' },
  { serial: 14, particulars: '24th meeting of the BWC', date: '27.11.2016' },
  { serial: 15, particulars: '23rd meeting of the BWC', date: '19.08.2016' },
  { serial: 16, particulars: '22nd meeting of the BWC', date: '04.07.2015' },
];

export default function BwcMinutesPage() {
  return (
    <MinutesPage
      title="Minutes of BWC"
      main={{
        title: 'Minutes of the Building Works Committee',
        data: bwcMinutes,
      }}
    />
  );
}
