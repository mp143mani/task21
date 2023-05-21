//https://fakestoreapi.com/products

fetch("https://fakestoreapi.com/products")


  //.then((data)=>console.log(data.json())) // Json format convering to the object
   
    .then((data)=>data.json())
    .then((ObjectData) =>
     {
        console.log(ObjectData[0].title);
        var htmltableData = "";
        ObjectData.map((values) => {
            htmltableData += `<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src=" ${values.image}"></td>
        <td>${values.category}</td>
        <td>${values.rating.rate}</td>
        <td>${values.rating.count}</td>
        </tr>`;



        })
        document.getElementById("table_body")
            .innerHTML = htmltableData;
    })

    se