const addPostHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('#txt_title').value;
    const body = document.querySelector('#txt_body').value;

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
                document.location.replace('/dashboard');
            })
            .catch(err => console.log(err))
    }

};

document
    .querySelector('#btn_addPost')
    .addEventListener('click', addPostHandler);
