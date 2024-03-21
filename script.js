const customSelectJs = document.querySelectorAll(".custom-select-js").forEach(customSelect => {
  if (customSelect) {
    let selectCurrent = customSelect.querySelector('.select__current');
    let selectList = customSelect.querySelector('.select__list');
    let selectInput = customSelect.querySelector('.tour__input');

    document.addEventListener('click', (e) => {
      if (e.target == selectCurrent) {
        selectListHide();
        transformArrow(customSelect);
      }
      else if (selectList.contains(e.target) && e.target != selectList) {
        //получаем содержание элемента (текст)
        let itemText = e.target.textContent;

        //присваиваем инпуту ранее полученное значение
        selectInput.value = itemText;

        //присваиваем текущее значение (текст) и возвращаем положение стрелки в исходное состояние
        selectCurrent.textContent = itemText;
        selectCurrent.insertAdjacentHTML('beforeend', '<span class="select__arrow"></span>');

        //скрываем выпадающий список
        selectListHide();

        //меняем активный элемент списка
        changeActiveItem(e.target);
      }
      else {
        selectListHide('Принудительное закрытие всех выподающих списков');
        transformArrow();
      }


    })

    // функция закрытия выпадающего списка
    let selectListHide = (x) => {
      if (x)
        selectList.classList.remove('show')
      else
        selectList.classList.toggle('show');
    }

    // функция смены активного элемента списка
    let changeActiveItem = (item) => {
      item.parentNode.querySelector('.select__item--current').classList.remove('select__item--current');
      item.classList.toggle('select__item--current');
    }
    // анимация поворота стрелки
    let transformArrow = (item) => {
      if (item)
        item.querySelector('.select__arrow').classList.toggle('select__arrow--transform');
      else if (customSelect.querySelector('.select__arrow--transform'))
        customSelect.querySelector('.select__arrow--transform').classList.remove('select__arrow--transform');
    }
  }

})

