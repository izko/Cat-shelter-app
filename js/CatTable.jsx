import React from 'react';
import ReactDOM from 'react-dom';
import CatRow from './CatRow.jsx';
import CatCategoryRow from './CatCategoryRow.jsx';

const style = {
  color:'red',
  backgroundColor: 'salmon',
}

class CatTable extends React.Component {

   getRows(category) {
        const items = this.props.kitties.filter(cat => {
        return cat.category === category;
    });

      const rows = items.map(cat => {
        return <CatRow key = {cat.name} cat = {cat} />;
      });

    return rows ;
  }

  render() {
    const maleRows = this.getRows('male');
    const femaleRows = this.getRows('female');

        return (
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th style = {{style}}>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                <CatCategoryRow category='male'/>
                {maleRows}
                <CatCategoryRow category='female'/>
                {femaleRows}
              </tbody>
            </table>
          </div>
        );
  }
}

export default CatTable;
