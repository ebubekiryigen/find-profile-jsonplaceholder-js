class UI{
    constructor(){
        this.profileContainer = document.querySelector('#profileContainer')
        this.alert            = document.querySelector('#alert')
    }
    showProfile(profile){
        this.profileContainer.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>
                    </div>
                    <div class="col-md-9">
                        <h4>İletişim</h4>
                        <ul class="list-group-item">
                            <li class="list-group-item">
                                Ad : ${profile.name}
                            </li>
                            <li class="list-group-item">
                                Kullanıcı Adı : ${profile.username}
                            </li>
                            <li class="list-group-item">
                                E-mail : ${profile.email}
                            </li>
                            <li class="list-group-item">
                                Adres : 
                                ${profile.address.street}
                                ${profile.address.suite}
                                ${profile.address.city}
                                ${profile.address.zipcode}
                            </li>
                            <li class="list-group-item">
                                Telefon : ${profile.phone}
                            </li>
                            <li class="list-group-item">
                                Website : ${profile.website}
                            </li>
                            <li class="list-group-item">
                                Şirket : ${profile.company.name}
                            </li>
                        </ul>
                        <h4>Todo Listesi</h4>
                        <ul class="list-group-item" id="todo"></ul>
                    </div>
                </div>
            </div>
        `
    }
    showAlert(text) {
        this.alert.innerHTML = `${text} is not found`
    }
    showTodo(todo) {
        let html = ""
        todo.forEach(item => {
            if(item.completed) {
                html += `
                <li class="list-group-item bg-success">
                    ${item.title}
                </li>
                `
            }else{
                html += `
                <li class="list-group-item bg-danger">
                    ${item.title}
                </li>
                `
            }
        });
        this.profileContainer.querySelector('#todo').innerHTML = html
    }
    clear(){
        this.profileContainer.innerHTML=""
        this.alert.innerHTML =""
    }
}