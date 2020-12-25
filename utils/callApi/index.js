import axios from '../../utils/axios';

export const callApi = (url, variables) => {console.log(url)
    return  axios.request({
        method: "GET",
        url: url,
      })
};