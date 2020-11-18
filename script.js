/* fetch('https://reqres.in/api/users')
    .then(res => {
        if(res.ok) {
            console.log('SUCCESS')
            res.json()
        } else {
            console.log('ERROR')
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log('NETWORK ERROR')) */

/*--- SETING UP BUTTONS ---*/
document.getElementById('get-email').addEventListener('click', getEmail);
document.getElementById('get-name').addEventListener('click', getName);
document.getElementById('get-all-users').addEventListener('click', getAllUsers);

/*--- SETING UP FORM ---*/
document.getElementById('add-user').addEventListener('submit', addUser);

/*--- SETING UP DIVS ---*/
let responseDiv = document.getElementById('output')

/*--- FETCHING ---*/
function getEmail(){
    fetch('https://reqres.in/api/users')
    .then(res => {
        if(res.ok) {
            //console.log('SUCCESS')
            return res.json()
        } else {
            console.log('ERROR-email')
        }
    })
    .then(data => {
        console.log(data);
        responseDiv.innerHTML = data.data[0].email;
    })
    .catch(error => console.log('UF THIS IS AN ERROR: ' + error))
}

function getName() {
    fetch('https://reqres.in/api/users')
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            console.log('ERROR-name')
        }
    })
    .then(data => {
        let firstName = data.data[0].first_name;
        let lastName = data.data[0].last_name;
        let name = firstName + ' ' + lastName;
        responseDiv.innerHTML = name;
    })
    .catch(error => console.log('UF THIS IS AN ERROR: ' + error))
}

function getAllUsers() {
    fetch('https://reqres.in/api/users')
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            console.log('ERROR-all-users');
        }
    })
    .then(data => {
        let output = '<h2>ALL USERS:</h2>';
        data.data.forEach(user => {
            output += `
            <ul>
                <li>Id: ${user.id}</li>
                <li>Name: ${user.first_name + user.last_name}</li>
                <li>Email: ${user.email}</li>
            </ul>
            `
            
        });
        responseDiv.innerHTML = output;
    })
    .catch(error => console.log('UF THIS IS AN ERROR: ' + error))
}

/*--- ADDING USERS ---*/

function addUser(e) {
    e.preventDefault(); //Stopping it from actually submitting to a file

    let first_Name = document.getElementById('add-first-name');
    let last_Name = document.getElementById('add-last-name');
    let email = document.getElementById('add-email');

    fetch('https://reqres.in/api/users', {
        method:'POST',
        headers:{
            'Accept': 'aplication/json, text/plain, */*',
            'Content-type': 'aplication/json'
        },
        body:JSON.stringify({
            first_name:first_Name,
            last_name:last_Name,
            email:email
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))

}