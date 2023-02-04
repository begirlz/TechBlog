
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

document
  .querySelector('.frm_comment')
  .addEventListener('submit', commentFormHandler);