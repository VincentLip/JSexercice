export class Contacts {
    constructor(title,lastname,firstname,date,telephone,email){

        this.title = title;
        this.lastname = lastname;
        this.firstname = firstname;
        this.date = date;
        this.telephone = telephone;
        this.email = email;
    }

    display() {

        return `<tr>
                    <td>${this.title}</td>
                    <td>${this.lastname}</td>
                    <td>${this.firstname}</td>
                    <td>${this.date}</td>
                    <td>${this.telephone}</td>
                    <td>${this.email}</td>
                </tr>`
    }
}