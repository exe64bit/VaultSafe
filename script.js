// Selecting all the divs
let register = document.querySelector(".register")
let login = document.querySelector(".login")
let dashboard = document.querySelector(".dashboard")
let add_iteams = document.querySelector(".add-iteams")
let view = document.querySelector(".view")
let edit = document.querySelector(".edit")
let delet_iteam = document.querySelector(".delet-iteam")
let change_password = document.querySelector(".change-password")
let iteams = document.querySelector(".iteams")
let toggle_password_show_hide = document.querySelectorAll(".toggle-password-show-hide")
let toggle_password_show_hide_img = document.querySelectorAll(".toggle-password-show-hide-img")


let id_passwords = []
let login_details = {}


//Selecting all the inputs---------------->

//Register

let input_register_username = document.getElementById("input-register-username")
let input_register_password = document.getElementById("input-register-password")
let input_register_re_password = document.getElementById("input-register-re-password")

//Login

let input_login_password = document.getElementById("input-login-password")

//Add

let add_iteam_name = document.getElementById("add-iteam-name")
let add_iteam_username = document.getElementById("add-iteam-username")
let add_iteam_password = document.getElementById("add-iteam-password")
let add_iteam_url = document.getElementById("add-iteam-url")

//View

let view_iteam_name = document.getElementById("view-iteam-name")
let view_iteam_username = document.getElementById("view-iteam-username")
let view_iteam_password = document.getElementById("view-iteam-password")
let view_iteam_url = document.getElementById("view-iteam-url")

//Edit

let edit_iteam_name = document.getElementById("edit-iteam-name")
let edit_iteam_username = document.getElementById("edit-iteam-username")
let edit_iteam_password = document.getElementById("edit-iteam-password")
let edit_iteam_url = document.getElementById("edit-iteam-url")

//Change Password

let input_change_password_password = document.getElementById("input-change-password-password")
let input_change_password_re_password = document.getElementById("input-change-password-re-password")




//Selecting all the buttons-------------->

//Register-Button

let register_btn = document.getElementById("register-btn")

//add-done-button

let add_iteam_btn = document.getElementById("add-iteam-btn")

// Login-Button

let login_btn = document.getElementById("login-btn")

// view-close-Button

let view_close_btn = document.getElementById("view-close-btn")

// Edit-Done-Button

let edit_done_btn = document.getElementById("edit-done-btn")

//Delete-Button

let delet_iteam_btn_yes = document.getElementById("delet-iteam-btn-yes")
let delet_iteam_btn_no = document.getElementById("delet-iteam-btn-no")

//Change-Password-Button

let change_password_btn = document.getElementById("change-password-btn")

//Dashboard>Iteam view, edit, delete buttons

let dashboard_btn_view = document.querySelector(".dashboard-btn-view")
let dashboard_btn_edit = document.querySelector(".dashboard-btn-edit")
let dashboard_btn_delete = document.querySelector(".dashboard-btn-delete")

// Dashboard add iteam chang password

let dashboard_add_iteam_btn = document.getElementById("dashboard-add-iteam-btn")
let dashboard_change_password_btn = document.getElementById("dashboard-change-password-btn")


// by default make all the divs display none

// register.style.display = "none"
login.style.display = "none"
dashboard.style.display = "none"
add_iteams.style.display = "none"
view.style.display = "none"
edit.style.display = "none"
delet_iteam.style.display = "none"
change_password.style.display = "none"


if (localStorage.getItem("REGISTERPAGE") === "DONE") {
    register.style.display = "none"
    login.style.display = "flex"
}


register_btn.addEventListener("click", () => {
    let name = input_register_username.value
    let Mpassword = input_register_password.value
    let ReMpassword = input_register_re_password.value

    if (Mpassword === ReMpassword) {
        localStorage.setItem("NAME", name)
        localStorage.setItem("MASTERPASSWORD", Mpassword)
        localStorage.setItem("REGISTERPAGE", "DONE")
        register.style.display = "none"
        login.style.display = "flex"
    }
    else {
        alert("Password Miss Match")
    }

})

login_btn.addEventListener("click", () => {
    let Mpassword = input_login_password.value
    if (Mpassword === localStorage.getItem("MASTERPASSWORD")) {
        login.style.display = "none"
        dashboard.style.display = "flex"
        document.getElementById("headding").style.display = "none"
    }
    else {
        alert("Incorrect Password.")
    }
})

rander_ID_Passwords()

dashboard_add_iteam_btn.addEventListener("click", () => {
    dashboard.style.display = "none"
    add_iteams.style.display = "flex"
})

function rander_ID_Passwords() {
    iteams.innerHTML = ""
    let id_passwords_array_with_objs = []
    if (localStorage.getItem("IDPASSWORDSKEY")) {
        let id_passwords_array = JSON.parse((localStorage.getItem("IDPASSWORDSKEY")))
        id_passwords_array.forEach((element) => {
            id_passwords_array_with_objs.push(JSON.parse(element))
        })
        id_passwords_array_with_objs.forEach((obj, index) => {
            let name = obj["Name"]
            let rander_html = `<div class="iteam">
                        <p class="dashboard-iteam-name">${name}</p>
                        <div class="dashboard-btns">
                            <button class="dashboard-btn-view" data-index_view="${index}">View</button>
                            <button class="dashboard-btn-edit" data-index_edit="${index}">Edit</button>
                            <button class="dashboard-btn-delete" data-index_delete="${index}">Delete</button>
                        </div>
                    </div>`
            iteams.insertAdjacentHTML("beforeend", rander_html)
        })
    }
    else {
        iteams.insertAdjacentHTML("beforeend", "NOTHING")
    }
}

add_iteam_btn.addEventListener("click", () => {
    let name = add_iteam_name.value
    let username = add_iteam_username.value
    let password = add_iteam_password.value
    let app_url = add_iteam_url.value

    login_details.Name = name
    login_details.UserName = username
    login_details.Password = password
    login_details.AppUrl = app_url

    if (localStorage.getItem("IDPASSWORDSKEY")) {
        id_passwords = []
        let convert_json_to_array = JSON.parse(localStorage.getItem("IDPASSWORDSKEY"))
        convert_json_to_array.forEach(element => {
            console.log(element);
            id_passwords.push(element)
        });
        id_passwords.push(JSON.stringify(login_details))
        localStorage.setItem("IDPASSWORDSKEY", (JSON.stringify(id_passwords)))
        rander_ID_Passwords()
    }
    else {
        id_passwords.push(JSON.stringify(login_details))
        let convert_array_to_json = JSON.stringify(id_passwords)
        localStorage.setItem("IDPASSWORDSKEY", convert_array_to_json)
        rander_ID_Passwords()
    }
    add_iteams.style.display = "none"
    dashboard.style.display = "flex"
})


iteams.addEventListener("click", (button) => {
    if (button.target.classList.contains("dashboard-btn-view")) {
        dashboard.style.display = "none"
        view.style.display = "flex"
        let id_passwords_array_with_objs = []
        
        let id_passwords_array = JSON.parse(localStorage.getItem("IDPASSWORDSKEY"))

        id_passwords_array.forEach((element, index)=>{
            id_passwords_array_with_objs.push(JSON.parse(element))
        })

        view_iteam_url.value = id_passwords_array_with_objs[button.target.dataset.index_view]["AppUrl"]
        view_iteam_password.value = id_passwords_array_with_objs[button.target.dataset.index_view]["Password"]
        view_iteam_username.value = id_passwords_array_with_objs[button.target.dataset.index_view]["UserName"]
        view_iteam_name.value = id_passwords_array_with_objs[button.target.dataset.index_view]["Name"]
        
        view_close_btn.addEventListener("click", (e)=>{
            view.style.display = "none"
            dashboard.style.display = "flex"
        })
    }
    else if (button.target.classList.contains("dashboard-btn-edit")){
        dashboard.style.display = "none"
        edit.style.display = "flex"
        let id_passwords_array_with_objs = []
        
        let id_passwords_array = JSON.parse(localStorage.getItem("IDPASSWORDSKEY"))

        id_passwords_array.forEach((element, index)=>{
            id_passwords_array_with_objs.push(JSON.parse(element))
        })
        edit_iteam_url.value = id_passwords_array_with_objs[button.target.dataset.index_edit]["AppUrl"]
        edit_iteam_password.value = id_passwords_array_with_objs[button.target.dataset.index_edit]["Password"]
        edit_iteam_username.value = id_passwords_array_with_objs[button.target.dataset.index_edit]["UserName"]
        edit_iteam_name.value = id_passwords_array_with_objs[button.target.dataset.index_edit]["Name"]
        
        edit_done_btn.addEventListener("click", (e)=>{

            let id_passwords_array_with_objs = []
            
            let id_passwords_array = JSON.parse(localStorage.getItem("IDPASSWORDSKEY"))

            id_passwords_array.forEach((element, index)=>{
                id_passwords_array_with_objs.push(JSON.parse(element))
            }) 

            id_passwords_array_with_objs[button.target.dataset.index_edit]["AppUrl"] = edit_iteam_url.value
            id_passwords_array_with_objs[button.target.dataset.index_edit]["Password"] = edit_iteam_password.value
            id_passwords_array_with_objs[button.target.dataset.index_edit]["UserName"] = edit_iteam_username.value
            id_passwords_array_with_objs[button.target.dataset.index_edit]["Name"] = edit_iteam_name.value

            let new_id_password_array_with_str_iteam = []

            id_passwords_array_with_objs.forEach((obj)=>{
                new_id_password_array_with_str_iteam.push(JSON.stringify(obj))
            })
            localStorage.setItem("IDPASSWORDSKEY", JSON.stringify(new_id_password_array_with_str_iteam))
            edit.style.display = "none"
            dashboard.style.display = "flex"
        })
    }
    else if (button.target.classList.contains("dashboard-btn-delete")){
        dashboard.style.display = "none"
        delet_iteam.style.display = "flex"
        delet_iteam_btn_yes.addEventListener("click", ()=>{
            let id_passwords_array = JSON.parse(localStorage.getItem("IDPASSWORDSKEY"))
            id_passwords_array.splice(button.target.dataset.index_delete, 1)
            localStorage.setItem("IDPASSWORDSKEY", JSON.stringify(id_passwords_array))
            delet_iteam.style.display = "none"
            dashboard.style.display = "flex"
            rander_ID_Passwords()
        })
        delet_iteam_btn_no.addEventListener("click", ()=>{
            delet_iteam.style.display = "none"
            dashboard.style.display = "flex"
        })
    }
})


toggle_password_show_hide.forEach(element => {
    element.addEventListener("click", ()=>{
    if(element.dataset.show_hide === "0"){
        input_register_password.type = "text"
        input_register_re_password.type = "text"
        input_change_password_re_password.type = "text"
        input_change_password_password.type = "text"
        edit_iteam_password.type = "text"
        view_iteam_password.type = "text"
        add_iteam_password.type = "text"
        input_login_password.type = "text"
        element.dataset.show_hide = "1"
        toggle_password_show_hide_img.forEach(img=>{
            img.src = "https://cdn-icons-png.flaticon.com/512/2767/2767194.png"
    
        })
    }
    else{
        input_register_password.type = "password"
        input_register_re_password.type = "password"
        input_change_password_re_password.type = "password"
        input_change_password_password.type = "password"
        edit_iteam_password.type = "password"
        view_iteam_password.type = "password"
        add_iteam_password.type = "password"
        input_login_password.type = "password"
        element.dataset.show_hide = "0"
        toggle_password_show_hide_img.forEach(img=>{
            img.src = "https://cdn-icons-png.flaticon.com/512/10898/10898993.png"
    
        })
        
    }
    })
});