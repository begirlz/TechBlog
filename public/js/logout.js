// const logout = async () => {
//     const response = await fetch('/api/users/logout',{
//         method: "POST",
//         headers: { 'content-type': 'application/json'}
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert(response.statusText);
//     }
// }

// async function logout() {
//     const response = await fetch('/api/users/logout', {
//         method: "post",
//         headers: { "Content-Type": "application/json" }
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert(response.statusText);
//     }
// }

function logout() {
    fetch("/api/users/logout", {
      method: "post",
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/");
      })
      .catch(err => console.log(err));
  }

document.querySelector('#logout').addEventListener("click", logout);