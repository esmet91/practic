import React from 'react';
function PopupAndSel() {
  const list = ['Собака', 'Кошка', 'Попугай'];
  const [item, setItem] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const itemSelected = list[item];
  const offPopup = function (param) {
    setItem(param);
    setVisible(false);
  };
  return (
    <div className="popup">
      <div className="countStyle">
        Отображение и скрытие попапа. Выбор элемента попапа! <span>PopupAndSel.jsx</span>
      </div>
      <div className="popup-block">
        <p>
          {' '}
          выбираем пункт попапа:
          <span onClick={() => setVisible(!visible)} className="list-item-checked">
            {itemSelected}
          </span>
        </p>
        {visible && (
          <div className="popup-block2">
            <ul className="popup-list">
              {list.map((value, index) => (
                <li
                  onClick={() => offPopup(index)}
                  key={value}
                  className={index === item ? 'active-list' : ''}>
                  {value}
                </li>
              ))}
              {/* <li className="active-list">Пункт 1</li>
            <li>Пункт 2</li>
            <li>Пункт 3</li> */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default PopupAndSel;
