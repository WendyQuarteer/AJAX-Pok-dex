//add even for when user clicks the button.
document.getElementById("run").addEventListener("click", () => {
    //get the value from the input-field.
    const input = document.getElementById("pokemon").value;
    //call the function getData which is going to relate on the input-value.
    getData(input).catch(error => alert("No such Pokemon found!"));
})

async function getData(string) {
    //fetch the pokeapi and raise the limit from 20 to 1500.
    //await operator to wait for promise.
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1500');
    //await promise to get data.
    const data = await response.json();
    //show data in console.  This only shows name and url.
    console.log(data);

}