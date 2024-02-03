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

/*
// Exemple d'ús:
const apiUrl = 'https://example.com/api';
const token = 'el_teu_token_aqui';

const usuarisController = new ReceptesController(apiUrl, token);

// Obté totes les receptes
receptesController.getAllReceptes().then(data => console.log(data));

// Obté una recepta per ID
const receptaId = 1;
receptesController.getRecepteById(receptaId).then(data => console.log(data));

// Crea una nova recepta
const novaUsuari = {
    nom: 'Paella',
    foto: 'paella.jpg',
    descripcio: 'Una deliciosa paella'
};
receptesController.createRecepte(novaUsuari.nom, novaUsuari.foto, novaUsuari.descripcio).then(data => console.log(data));

// Actualitza una recepta existent
const receptaActualitzada = {
    id: 1,
    nom: 'Paella Valenciana',
    foto: 'paella_valenciana.jpg',
    descripcio: 'La veritable paella valenciana'
};
receptesController.updateRecepte(receptaActualitzada.id, receptaActualitzada.nom, receptaActual
*/