/**
 * Settings containing:
 * - Dummy data (used for modal and app)
 * - Modal styles
 * - App styles
 * - arrCandidate (for sorting)
 * - DisplayList (Will be used to display sorted list of items)
 */

import React from 'react';



export const dummyData = {
  title: 'Custom Modal Title',
  msg: `Carrot cake halvah brownie fruitcake sesame snaps fruitcake. 
          Powder cake cake. Muffin chocolate marzipan macaroon gingerbread. 
          Candy toffee apple pie marshmallow. Cheesecake sweet sweet roll. 
          Jelly-o danish lollipop pudding tootsie roll brownie jelly. 
          Cookie tart candy pastry jelly dessert chupa chups sweet roll sweet roll. 
          Soufflé jujubes bonbon pie. Chocolate cake powder cupcake wafer. 
          Bear claw cake ice cream jelly beans pie. 
          Danish pastry bonbon liquorice gummies bear claw. 
          Danish carrot cake cake donut ice cream croissant gingerbread lollipop bonbon. 
          Lollipop gingerbread gummi bears donut pie. 
          Brownie liquorice soufflé bear claw topping marshmallow croissant icing.`
};


export const arrCandidates = [
  {
    name: 'Carrot cake',
    number: 39,
  },
  {
    name: 'halvah brownie',
    number: 11,
  },
  {
    name: 'fruitcake sesame snaps',
    number: 45,
  },
  {
    name: 'Powder cake',
    number: 45,
  },
  {
    name: 'Muffin chocolate',
    number: 37,
  },
  {
    name: 'marzipan macaroon',
    number: 74,
  },
  {
    name: 'Candy toffee',
    number: 35,
  },
  {
    name: 'apple pie marshmallow',
    number: 83,
  },
  {
    name: 'Cheesecake sweet',
    number: 92,
  },
  {
    name: 'Jelly-o danish',
    number: 52,
  },
  {
    name: 'Soufflé jujubes',
    number: 29,
  },
  {
    name: 'Danish carrot',
    number: 67,
  },
  {
    name: 'Lollipop gingerbread',
    number: 88,
  },
];


export const appStyles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
};


export const modalStyles = {
  title: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#F5CE23',
  },
  body: {
    padding: '30px 20px',
  },
  footer: {
    margin: '0',
    padding: '10px 20px',
    borderTop: '1px solid #ccc',
  },
  btnClose: {
    position: 'absolute',
    top: '-6px',
    right: '0',
    width: '20px!important',
  },
  primaryBtn: {
    backgroundColor: '#86bf40',
    color: '#fff',
    textTransform: 'uppercase',
  },
};


/**
 * Will be used to display sorted list of items
 * @param {*} list, title
 */
export const DisplayList = ({ list, title}) => {

  const style = {
    container: {
      padding: '20px',
    },
    td: {
      padding: '5px',
      color: '#666',
    },
  }

  return(
    <div style={style.container}>
      <h3>{title}</h3>
      <table>
        <tr>
          <td style={style.td}>
            <b>Name</b>
          </td>
          <td style={style.td}>
            <b>Number</b>
          </td>
        </tr>
        {
          list && list.map(item => {
            return(
              <tr key={item.number}>
                <td style={style.td}>
                  {item.name}
                </td>
                <td style={style.td}>
                  {item.number}
                </td>
              </tr>
            );
          })
        }
      </table>
    </div>
  );

}
