const APIURL = 'https://app.nocodb.com/api/v2/tables/mmawbjr93au0ync/records';
const TOKEN = 'zm63aqFNGcY4Srn79LxAp6qA8bHqm3mMjuCIIs4Q';

class UsuarisController {
    constructor() {
        this.apiUrl = APIURL;
        this.token = TOKEN;
    }

    async validaUsuari(nom, password){
        const response = await fetch(`${this.apiUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const response_data =  await response.json();
       
        const users = response_data.list;
        const validUser = users.filter(e => e.nom===nom && e.password===password)

        return !!validUser.length;
    }



    async getAllUsuaris() {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        return  response.json();
    }

    async getUsuariById(id) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();
        return data;
    }

    async createUsuari(nom, foto, descripcio) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                nom: nom,
                foto: foto,
                descripcio
            })
        });

        const data = await response.json();
        return data;
    }

    async updateUsuari(id, nom, foto, descripcio) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                nom,
                foto,
                descripcio
            })
        });

        const data = await response.json();
        return data;
    }

    async deleteUsuari(id) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Id:id
            })
        });

        const data = await response.json();
        return data;
    }
}

export default UsuarisController;
