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
    }

}

export default dbActions;