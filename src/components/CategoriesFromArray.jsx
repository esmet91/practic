import React from 'react';
function CategoriesFromArray() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  const categories = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5', 'Пункт 70'];
  return (
    <div>
      <h2 className="countStyle">
        Выбор категорий <span>CategoriesFromArray.jsx</span> (Заполнение из массива)
      </h2>
      <ul className="categoryList">
        {/*<li onClick={() => onClickCategory(0)} className={activeIndex === 0 ? 'active' : ''}> Все </li>*/}
        {categories.map((value, index) => (
          <li
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CategoriesFromArray;
