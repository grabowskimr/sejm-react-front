import axios from 'axios';

const dbActions = {

    getEnvoyList: function(type) {
        return axios.get(`/dbCallFront.php?action=getEnvoyList&type=${type}`)
            .then(response => {
                var envoyList = {};
                response.data.map((item, index) => {
                    !(item.surname.slice(0,1).toUpperCase() in envoyList) && (envoyList[item.surname.slice(0,1).toUpperCase()] = []);
                    envoyList[item.surname.slice(0,1).toUpperCase()].push(item);
                });
                return {alphabet: Object.keys(envoyList), envoyList};
            })
    },

    getEnvoyListByParty: function(type) {
        return axios.get(`/dbCallFront.php?action=getEnvoyListByParty&type=${type}`)
            .then(response => {
                var envoyList = {};
                response.data.map((item, index) => {
                    !(item.party.toUpperCase() in envoyList) && (envoyList[item.party.toUpperCase()] = []);
                    envoyList[item.party.toUpperCase()].push(item);
                });
                return {alphabet: [], envoyList};
            })
    },

    getEnvoyListByPoints: function(type) {
        return axios.get(`/dbCallFront.php?action=getEnvoyListByPoints&type=${type}`)
            .then(response => {
                var list = {};
                response.data.map((item, index) => {
                    !(`${item.points}pkt.` in list) && (list[`${item.points}pkt.`] = []);
                    list[`${item.points}pkt.`].push(item);
                });
                var envoyList = {};
                var sortedList = Object.keys(list).map(key => parseFloat(key.replace('pkt.',''))).sort((a, b) => {
                    if(a > b) {
                        return 1;
                    } else if(b > a) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
                sortedList.forEach(function(key) {
                    envoyList[`${key}pkt.`] = list[`${key}pkt.`];
                });
                return {alphabet: sortedList, envoyList};
            })
    },

    getEnvoyListOnlyPositive: function(type) {
        return axios.get(`/dbCallFront.php?action=getEnvoyList&type=${type}`)
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
    },

    getBestForAnimals: function(type) {
        return axios.get(`/dbCallFront.php?action=getBestForAnimals`)
            .then(response => response.data)
    },

    getWorstForAnimals: function(type) {
        return axios.get(`/dbCallFront.php?action=getWorstForAnimals`)
            .then(response => response.data)
    },

    getEnvoyListByPos: function(location) {
        return axios.get(`/dbCallFront.php?action=getEnvoyListByPos&city=${location.city}&country=${location.country}`)
            .then(response => response.data)
    },
    
    getCountries: function(id) {
        return axios.get(`/dbCallFront.php?action=getCountries`)
            .then(response => response.data)
    },

    sendAnswers: function(answers, id, points) {
        return axios.get(`/dbCallFront.php?action=sendAnswers&answers=${answers}&id=${id}&points=${points}`)
            .then(response => response.data)
    },

    checkId: function(hash) {
        hash = hash.slice(4);
        return axios.get(`/dbCallFront.php?action=checkId&hash=${hash}`);
    },

    sign: function(data) {
        return axios.get(`/dbCallFront.php?action=sign&imie=${data.imie}&email=${data.email}`);
    }


}

export default dbActions;