import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGoods, setSelectedGoods] = useState('Jam');

  const toggleGood = good =>
    setSelectedGoods(prev => (prev === good ? null : good));

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGoods ? `${selectedGoods} is selected` : 'No goods selected'}
        {selectedGoods && (
          <button
            onClick={() => setSelectedGoods(null)}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                selectedGoods === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  onClick={() => toggleGood(good)}
                  data-cy={
                    selectedGoods === good ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className="button is-info"
                >
                  {selectedGoods === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
