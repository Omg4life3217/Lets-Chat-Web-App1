
getData();

gi = localStorage.getItem("un")

function logout() {
    localStorage.removeItem("un")
    localStorage.removeItem("rn")
    window.location = "index.html"
}

document.getElementById("wt").innerHTML = "Welcome " + gi + "!"

function addRoom() {
    rn = document.getElementById("rn").value
    localStorage.setItem("rn", rn)
    firebase.database().ref("/").child(rn).update({
          purpose: "Adding room name"
    })
    window.location = "kwitter_page.html"
}

function redirect(name) {
    localStorage.setItem("rn", name)
    window.location = "kwitter_page.html"
}