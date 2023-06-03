
export const fetchArticulos = async (categoria, trigger = null) => {
    let url = "https://5eed24da4cbc340016330f0d.mockapi.io/api/articles";
    if (categoria) url = `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=${categoria}`;

        fetch(url).then(response => response.json())
            .then(response => {
                if(typeof response != 'object') {
                    console.log("Error");
                    alert("Error");
                }
                if (trigger) trigger(response);
            })
            .catch(err => {
                console.log("Error", err);
                alert("Error");
            })
    
}