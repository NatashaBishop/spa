
createNabBar();

function createNabBar(){
    const div = `
        <div>
            <input type='button' value='posts' id='posts-button'>
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

    const postsButton = document.querySelector('#posts-button');
    postsButton.addEventListener('click', () => {
        fetch('http://localhost:8080/posts')
        .then(response => response.json())
        .then(arr => {
            //document.querySelector('#echo').textContent = JSON.stringify(arr);
            for(let i = 0; i < arr.length; i++) {
                let post = arr[i];
            
                document.querySelector('#echo').textContent += JSON.stringify(post);
               
                console.log(post["Content"]);



            }

        })
        .catch(err => console.log(err));
    });

}
