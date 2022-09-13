import "./MyTable.scss";

// https://www.youtube.com/watch?v=biI9OFH6Nmg

const MyTable = () => {
  return (
    <div className="my-table">
      <h1>Moja tabelka</h1>
      <table class="content-table">
        {/* blok nagłówka tabelki */}
        <thead class="thead">
          <tr class="thead__tr">
            <th class="thead__th">Rankffffffffffffffffffffffffffffffff</th>
            <th class="thead__th">Name</th>
            <th class="thead__th">Points</th>
            <th class="thead__th">Team</th>
          </tr>
        </thead>
        {/* kolejny blok - ciało tabelki */}
        <tbody class="tbody">
          <tr class="tbody__tr">
            <td class="tbody__td">1</td>
            <td class="tbody__td">Domenic</td>
            <td class="tbody__td">88,110</td>
            <td class="tbody__td">dcode</td>
          </tr>
          <tr class="tbody__tr tbody__tr--active-row">
            <td class="tbody__td">2</td>
            <td class="tbody__td">Sally</td>
            <td class="tbody__td">72,400</td>
            <td class="tbody__td">Students</td>
          </tr>
          <tr class="tbody__tr tbody__tr--border-bottom">
            <td class="tbody__td">3</td>
            <td class="tbody__td">Nick</td>
            <td class="tbody__td">52,300</td>
            <td class="tbody__td">dcode</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
