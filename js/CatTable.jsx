import React from 'react';
import ReactDOM from 'react-dom';

class CatTable extends React.Component {

   getRows(type) {
        const items = this.props.kitties.filter(cat => {
        return cat.type === type;
    });

      const rows = items.map(cat => {
        return (
          <tr key = {cat.name}>
            <td>{cat.name}</td>
            <td>{cat.age}</td>
          </tr>
        );
      });

    return rows ;
  }

  render() {
    console.log(this.props.kitties);

    const maleRows = this.getRows('male');

        return (
          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Age</th>
                  </tr>
              </thead>
              <tbody>
                  {maleRows}
                  <tr>
                      <th colSpan="2">female</th>
                  </tr>
                  <tr>
                      <td>Jude Paw</td>
                      <td>4</td>
                  </tr>
              </tbody>
          </table>
        );
  }
}

export default CatTable;
