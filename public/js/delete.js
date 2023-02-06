
const delButtonHandler = async (event) => {
    event.preventDefault();

    const post_id = event.target.getAttribute('data-id');

    fetch(`api/posts/${post_id}`, {
        method: 'delete'
      })
        .then(function () {
            console.log("deleted post");
          document.location.replace("/dashboard");
        })
        .catch(err => console.log(err))
};

document
    .querySelector('#btn_delete')
    .addEventListener('click', delButtonHandler);