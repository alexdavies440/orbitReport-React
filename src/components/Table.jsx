
const Table = ({ sat }) => {
  const operationStatus = (operational) => {
    if (operational) {
      return "Active";
    } else if (!operational) {
      return "Inactive";
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satelite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        {sat.map((data, id) => {
          return (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{operationStatus(data.operational)}</td>
            </tr>
          );
        })}


      </tbody>
    </table>
  );
};

export default Table;