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

    getEnvoyListByParty: function() {
        return axios.get('/dbCallFront.php?action=getEnvoyListByParty')
            .then(response => {
                var envoyList = {};
                response.data.map((item, index) => {
                    !(item.party.toUpperCase() in envoyList) && (envoyList[item.party.toUpperCase()] = []);
                    envoyList[item.party.toUpperCase()].push(item);
                });
                return {alphabet: Object.keys(envoyList), envoyList};
            })
    },

    getEnvoyListByPoints: function() {
        return axios.get('/dbCallFront.php?action=getEnvoyListByPoints')
            .then(response => {
                var envoyList = {};
                response.data.map((item, index) => {
                    !(item.points in envoyList) && (envoyList[item.points] = []);
                    envoyList[item.points].push(item);
                });
                return {alphabet: Object.keys(envoyList), envoyList};
            })
    },

    getEnvoyListOnlyPositive: function() {
        return axios.get('/dbCallFront.php?action=getEnvoyList')
            .then(response => {
                var envoyList = {};
                response.data.map((item, index) => {
                    if(item.points > 0) {
                        !(item.surname.slice(0,1).toUpperCase() in envoyList) && (envoyList[item.surname.slice(0,1).toUpperCase()] = []);
                        envoyList[item.surname.slice(0,1).toUpperCase()].push(item);
                    }
                });
                return {alphabet: Object.keys(envoyList), envoyList};
            })
    },

    getQueryList: function(query) {
        return axios.get(`/dbCallFront.php?action=getQueryList&query=${query}`)
            .then(response => {
                var envoyList = {};
                envoyList[query] = [];
                response.data.map((item) => {
                    envoyList[query].push(item);
                });
                return {alphabet: [], envoyList};
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