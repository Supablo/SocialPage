async function getName() 
{
    let response = await fetch('https://jsonplaceholder.typicode.com/users/');
    let value = await response.json();
    return value;
}

async function getBody() 
{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let value = await response.json();
    return value;
}

async function getTodo() 
{
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let value = await response.json();
    return value;
}

getName().then(value => 
{
    let container = document.createElement("div");
    container.className = "container";
    document.getElementById("content").appendChild(container);

    let feedTitle = document.createElement("h2");
    feedTitle.textContent = "Feed";
    container.appendChild(feedTitle);

    for (let i = 0; i < 5; i++) 
    {
        let div = document.createElement("div");
        div.className = "post";
        div.innerHTML += `<h2> ${value[i].name} </h2>`;
        container.appendChild(div);
    }

    console.log("Names fetched and displayed");

    getBody().then(value => 
    {
        let divs = document.getElementsByClassName("post");
        for (let i = 0; i < 5; i++) 
        {
            let div = divs[i];
            div.innerHTML += `<p> ${value[i].body} </p>`;
        }

        console.log("Bodies fetched and displayed");
    });
});

getTodo().then(value => 
{
    let todosContainer = document.getElementById("todos");
    let title = document.createElement("h2");
    title.textContent = "TODOs";
    todosContainer.appendChild(title);

    for (let i = 0; i < 5; i++) 
    {
        let div = document.createElement("div");
        div.className = "todo";
        div.innerHTML += `<p>${value[i].title}</p>`;
        todosContainer.appendChild(div);
    }

    console.log("Todos fetched and displayed");
});