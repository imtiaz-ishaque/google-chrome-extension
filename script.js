async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos?albumId=100");
    const data = await response.json();
    document.getElementById("title").innerHTML = data[0].title;
    document.getElementById("thumbImg").src = data[0].thumbnailUrl;
}

fetchData();