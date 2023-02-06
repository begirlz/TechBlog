
const commentFormHandler = async function (event) {
  event.preventDefault();

  const post_id = event.target.getAttribute('data-id');
  const body = document.querySelector('#txt_comment').value;

  if (body) {
    fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id: post_id,
        body: body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function () {
        document.location.replace(`/posts/${post_id}`);
      })
      .catch(err => console.log(err))
  }
};

const delButtonHandler = async function (event) {
  event.preventDefault();

  if (event.target.hasAttribute('data-id')) {
    const post_id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${post_id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }

}

document
  .querySelector('#btn_delete')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.frm_comment')
  .addEventListener('submit', commentFormHandler);