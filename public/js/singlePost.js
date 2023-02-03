
const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const postId = document.querySelector('#').value;
    const body = document.querySelector('#txt_comment').value;
  
    if (body) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          postId,
          body
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
  };
  
  document
    .querySelector('#frm_comment')
    .addEventListener('submit', commentFormHandler);