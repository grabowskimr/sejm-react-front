import axios from 'axios';

const dbActions = {

    getEnvoyList: function() {
        return axios.get('/dbCallFront.php?action=getEnvoyList')
            .then(response => {
                var envoyList = {};
                response.data.map((item, index) => {
                    !(item.surname.slice(0,1).toUpperCase() in envoyList) && (envoyList[item.surname.slice(0,1).toUpperCase()] = []);
                    envoyList[item.surname.slice(0,1).toUpperCase()].push(item);
                });
                return {alphabet: Object.keys(envoyList), envoyList};
            })
    },

    getEnvoy: function(id) {
        return axios.get(`/dbCallFront.php?action=getEnvoy&id=${id}`)
            .then(response => response.data)
    },

    getEnvoyStructure: function() {
        return axios.get(`/dbCallFront.php?action=getEnvoyStructure`)
            .then(response => response.data)
    }

}

export default dbActions;