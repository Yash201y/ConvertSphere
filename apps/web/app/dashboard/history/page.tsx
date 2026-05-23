export default function HistoryPage() {
    return (
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-10">Conversion History</h1>
  
        <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="p-6">File</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-6">presentation.pptx</td>
                <td>Completed</td>
                <td>Today</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }