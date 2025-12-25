export default function Page() {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <h1>Evaluation Schedules — 2025-26</h1>
      <p>
        Below are the official evaluation schedules for the academic year
        2025-26. Click the download links to view the PDF schedules.
      </p>

      <table
        style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: 'left',
                padding: 8,
                borderBottom: '1px solid #ddd',
              }}
            >
              Exam
            </th>
            <th
              style={{
                textAlign: 'left',
                padding: 8,
                borderBottom: '1px solid #ddd',
              }}
            >
              Date / Period
            </th>
            <th
              style={{
                textAlign: 'left',
                padding: 8,
                borderBottom: '1px solid #ddd',
              }}
            >
              Download
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: 8, borderBottom: '1px solid #f2f2f2' }}>
              Semester I — Midterm
            </td>
            <td style={{ padding: 8, borderBottom: '1px solid #f2f2f2' }}>
              Aug 2025
            </td>
            <td style={{ padding: 8, borderBottom: '1px solid #f2f2f2' }}>
              <a
                href="/evaluation-schedules/sem1-midterm-2025.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                Download PDF
              </a>
            </td>
          </tr>

          <tr>
            <td style={{ padding: 8, borderBottom: '1px solid #f2f2f2' }}>
              Semester I — Endterm
            </td>
            <td style={{ padding: 8, borderBottom: '1px solid #f2f2f2' }}>
              Nov 2025
            </td>
            <td style={{ padding: 8, borderBottom: '1px solid #f2f2f2' }}>
              <a
                href="/evaluation-schedules/sem1-endterm-2025.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                Download PDF
              </a>
            </td>
          </tr>

          <tr>
            <td style={{ padding: 8 }}>Semester II — Midterm</td>
            <td style={{ padding: 8 }}>Feb 2026</td>
            <td style={{ padding: 8 }}>
              <a
                href="/evaluation-schedules/sem2-midterm-2026.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                Download PDF
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{ marginTop: 18, color: '#555' }}>
        If you need any other schedule or a printed copy, contact the academic
        office.
      </p>
    </main>
  );
}
