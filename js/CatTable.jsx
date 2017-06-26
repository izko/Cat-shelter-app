import React from 'react';
import ReactDOM from 'react-dom';

class CatTable extends React.Component {
    render () {
      console.log(this.props.kitties);
        return (
          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Age</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th colSpan="2">male</th>
                  </tr>
                  <tr>
                      <td>Fidel Catstro</td>
                      <td>4</td>
                  </tr>
                  <tr>
                      <td>Hairy Potter</td>
                      <td>4</td>
                  </tr>
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
