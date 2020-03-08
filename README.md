точка входа - `App.js`
 Импортится модуль Table - суть данного проекта

 # Запуск проекта
 Из корня запустить
 ```
 npm install
 npm run start
 ```
 Дальше открыть в браузере `http://localhost:3000/` и наслаждаться

 # Настройка таблицы
Для убирания возможности добавления, рдактирования или удаления записи,
нужно в компонент `<Table />` передать параметр add, edit или remove со значением `false`

Чтобы спрятать столбец, нужно передать его название в массиве `hiddenColumns`

# Настройка столбцов
 Самое главное - функция `getColumns()`, которая настраивает поля записей (колонки для таблицы)
 Если при создании и редактировании поля нужно убрать возможность задать значиение полю 
 (например, primary key), то нужно задать
для колонки `hidden: true`

чтобы запретить сортировку колонки, нужно передать `disableSortBy: true`

Также есть возможность менять виджет для поля в модальном окне.
Для этого нужно задать `editType`. На данный момент помимо дефолтного только поля input доступны
select и textArea.

Для select в параметре editValues нужно задать желаемые значения options. Иначе select не отрендерится

Ширина колонки задается в параметре `width`

Пример настройки есть в `App.js`