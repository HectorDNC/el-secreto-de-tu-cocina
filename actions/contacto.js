
export const postContacto = async (data, trigger = null) => {
    var url = 'https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter';

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (!res.ok) {
            console.error('Error:', res.statusText);
            alert('Error');
            if (trigger) trigger(false);
            return false;
        }
        alert('Enviado');
        if (trigger) trigger(true);
    })

}