function nationalize() {
fetch("https://api.nationalize.io?name=michael")
  .then(response => response.json())
  .then(data => {
    document.getElementById("singleRequest").addEventListener("click", function () {
        fetch('https://api.nationalize.io/?name=michael')
            .then(response => response.json())
            .then(data => {
                document.getElementById("result").textContent = JSON.stringify(data, null, 2);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });

    document.getElementById("multipleRequest").addEventListener("click", function () {
        fetch('https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane')
            .then(response => response.json())
            .then(data => {
                document.getElementById("result").textContent = JSON.stringify(data, null, 2);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
  })
  .catch(error => {
    console.log("Произошла ошибка:", error);
  });
}

nationalize();