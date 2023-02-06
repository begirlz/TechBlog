const editFormHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('#txt_title').value.trim();
    const body = document.querySelector('#txt_body').value.trim();
    const post_id = event.target.getAttribute('data-id');

    fetch("/api/posts/" + post_id, {
        method: "put", 
        body: JSON.stringify({
            title: title,
            body: body
        }),
        headers: { "Content-Type": "application/json"}
    })
        .then(function(data) {
            console.log(data);
            document.location.replace("/dashboard");
        })
        .catch(err => console.log(err))

}

document.querySelector("#btn_edit").addEventListener("click", editFormHandler);