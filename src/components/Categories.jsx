import React from 'react';
function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div>
      <h2 className="countStyle">
        Выбор категорий <span>Categories.jsx</span> (Заполнение вручную)
      </h2>
      <ul className="categoryList">
        <li onClick={() => onClickCategory(0)} className={activeIndex === 0 ? 'active' : ''}>
          Пункт 1
        </li>
        <li onClick={() => onClickCategory(1)} className={activeIndex === 1 ? 'active' : ''}>
          Пункт 2
        </li>
        <li onClick={() => onClickCategory(2)} className={activeIndex === 2 ? 'active' : ''}>
          Пункт 3
        </li>
        <li onClick={() => onClickCategory(3)} className={activeIndex === 3 ? 'active' : ''}>
          Пункт 4
        </li>
        <li onClick={() => onClickCategory(4)} className={activeIndex === 4 ? 'active' : ''}>
          Пункт 5
        </li>
        <li onClick={() => onClickCategory(5)} className={activeIndex === 5 ? 'active' : ''}>
          Пункт 6
        </li>
      </ul>
    </div>
  );
}
export default Categories;
