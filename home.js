let loggedinUser = JSON.parse(localStorage.getItem('loggedInUser'))



document.querySelector('.submit').addEventListener('click', () => {
    let div = document.createElement('div');
    document.body.appendChild(div)
    div.classList.add('postContainer')
    let date = new Date().toLocaleDateString();
    let input = document.querySelector('input').value;
    div.innerHTML = `
    <div class="image">
            <img src="images/WIN_20240220_13_26_17_Pro.jpg" alt="profile pic">
        </div>
                    <h3>${loggedinUser.username}</h3>
                    <P>${date}</P>
                    <br>
                    <p>${input}</p>
                    <img src="images/post1.7a94fa87.jpg" alt="profile" class="userId">
                    <hr/>
                    <ul class="ul">
                    <li><button>Like</button></li>
                    <li><button>Comment</button></li>
                    <li><button>Share</button></li>
                    </ul>
                    <h4 class = "txt">See Insights</h4>
                    <button class = "boost">Boost Post</button>
    `
    
    if (!input){
        div.style.display = 'none'
        alert('Please Enter Some Text')
    }
    else {
        alert("post successfully posted") 
    }



})

if (!loggedinUser) {
    window.location.href = './login.html'
    alert('there is no none logged in')
}

document.querySelector('.logout').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser')
    document.querySelector('.post')
    setTimeout(() => {
        window.location.href = 'login.html'
    }, 1000)
})
