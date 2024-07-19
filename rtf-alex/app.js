
createNabBar();

function createNabBar(){
    const div = `
        <div>
            <input type='button' value='login' id='login-button'>
            <input type='button' value='register'>
        </div>  
        <div id='echo'></div>  
    `
    document.body.innerHTML = div;

    const loginButton = document.querySelector('#login-button');
    loginButton.addEventListener('click', () => {
      
        fetch('http://localhost:8080/')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#echo').textContent = data.Message;
        })
        .catch(err => console.log(err));
    });

}
