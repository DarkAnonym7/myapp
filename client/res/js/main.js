const info = document.getElementById('info');
const getButton = document.getElementById('get');
const postButton = document.getElementById('post');
const putButton = document.getElementById('put');
const patchButton = document.getElementById('patch');
const deleteButton = document.getElementById('delete');

/**
 * GET /user/:id
 * Posílá GET požadavek na server. Server přepošle data zpátky.
 */
const getEvent = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/user/mojesuperid', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const data = await res.json();
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${data.id}</p>`;
    } catch (error) {
        info.innerText = error;
    }
}
getButton.onclick = getEvent;


/**
 * POST /user
 * Posílá POST požadavek na server. Server přepošle data zpátky.
 */
const postEvent = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ payload: { id: "mojesuperid", name: "Petrr", nickname: "Feeder123", password: "Nudle345.", email: "petr@nudle.cz" } })
        });
        const data = await res.json();
        console.log(data);
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
    } catch (error) {
        info.innerText = error;
    }
}
postButton.onclick = postEvent;


/**
 * PUT /user
 * Posílá PUT požadavek na server. Server přepošle data zpátky.
 */
const putEvent = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({ payload: { id: "mojesuperid", name: "Petr", nickname: "Feeder", password: "Nudle123.", email: "petr@nudle.cz" } })
        });
        const data = await res.json();
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
    } catch (error) {
        info.innerText = error;
    }
}
putButton.onclick = putEvent;


/**
 * PATCH /user
 * Posílá PATCH požadavek na server. Server přepošle data zpátky.
 */
const patchEvent = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify({ payload: { id: "mojesuperid", name: "Petr" } })
        });
        const data = await res.json();
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
    } catch (error) {
        info.innerText = error;
    }
}
patchButton.onclick = patchEvent;

/**
 * DELETE /user
 * Posílá DELETE požadavek na server. Server přepošle data zpátky.
 */
const deleteEvent = async () => {
    try {
        const res = await fetch('http://127.0.0.1:3000/user', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE",
            body: JSON.stringify({ payload: { id: "mojesuperid", msg: "RIP account" } })
        });
        const data = await res.json();
        info.innerHTML = `<p>${data.msg}</p>`;
        info.innerHTML += `<p>${Object.values(data.payload)}</p>`;
    } catch (error) {
        info.innerText = error;
    }
}
deleteButton.onclick = deleteEvent;