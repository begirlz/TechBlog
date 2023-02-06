
const delButtonHandler = async (event) => {
    event.preventDefault();

    const post_id = event.target.getAttribute('data-id');

    console.log(post_id);
    // if (event.target.hasAttribute('data-id')) {

    //     const post_id = event.target.getAttribute('data-id');

    //     const response = await fetch(`/api/posts/${post_id}`, {
    //         method: 'DELETE',
    //     });

    //     if (response.ok) {
    //         document.location.replace('/dashboard');
    //     } else {
    //         alert('Failed to delete post');
    //     }
    // }

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