import React from 'react';
import ReactDOM from 'react-dom';

class CatRow extends React.Component {


    render () {
      const style = {};
      if (!this.props.cat.likesKids){
        style.color = 'red';
      }
        return (
          <tr>
            <td style={style}>{this.props.cat.name}</td>
            <td>{this.props.cat.age}</td>
          </tr>
        );
      }
}

export default CatRow;
