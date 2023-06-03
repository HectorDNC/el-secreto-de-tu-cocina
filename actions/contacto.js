
export const postContacto = async (data, trigger = null) => {
    var url = 'https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter';

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => {
            console.error('Error:', error);
            alert('Error');
        })
        .then(response => {
            console.log('Success:', response);
            alert("Enviado correctamente!");
        });

    if (trigger) trigger();

}