function university_list() {
    fetch("https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json")
    // обработки ответа сервера
    // промис, который обрабатывает данные, когда они становятся доступными
    .then(response => response.json()) //ответ конвертируется из формата JSON в JavaScript объект с помощью response.json()
    // после конвертации из JSON ответ обрабатывается в следующем блоке
    .then(data => { // перебор всех университетов в полученных данных
        
        //  ссылка на таблицу, которую мы управляем, сохраняется в переменной table
        let table = document.getElementById('universityTable');
        for(let i = 0; i < data.length; i++) {
            let row = document.createElement('tr'); // создает новый элемент tr (строку таблицы) и сохраняет ссылку на него в переменной row
  
            let nameCell = document.createElement('td'); // создаются ячейки (td) для каждого из значений // Создает новый элемент td (ячейку таблицы) для хранения имени университета
            nameCell.textContent = data[i].name; // заполняет текстовое содержимое ячейки именем университета из текущего объекта данных
            row.appendChild(nameCell); // добавляет ячейку имени в строку таблицы.
  
            let countryCell = document.createElement('td');
            countryCell.textContent = data[i].country;
            row.appendChild(countryCell);
  
            let webCell = document.createElement('td');
            webCell.textContent = data[i].web_pages[0];
            row.appendChild(webCell);
  
            table.appendChild(row); // добавляет полностью сконструированную строку к таблице.
        }
    })
    .catch(error => console.error('Ошибка:', error));
  }
  
  university_list(); 
  // процесс загрузки данных и их добавления в таблицу
  