import http from '../http/http.common.api'


class DataService {


    addNewPlant(data){
        return http.post('/plants/add',data)
        }

  }

  export default new DataService();