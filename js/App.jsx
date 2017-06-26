import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
    render () {
        return (
          <section>

            <SearchBar />
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

          </section>
        )
    }
}

export default App;
