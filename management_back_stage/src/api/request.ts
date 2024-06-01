    import axios from 'axios'

    // axios.defaults.baseURL = ' http://localhost:8081';
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    export const login_get_api = ( url:any )=>{
        return axios.get( url.value )
    }