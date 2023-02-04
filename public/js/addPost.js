const addPostHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('#txt_title').value;
    const url = document.querySelector('#txt_body').value;

    if (body) {
        fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function () {
                document.location.replace(`/`);
            })
            .catch(err => console.log(err))
    }

};

document
    .querySelector('#btn_addPost')
    .addEventListener('submit', addPostHandler);
