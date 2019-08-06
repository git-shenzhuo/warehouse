import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    // ...
    state:{

    },
    mutations:{
        remove(index,row){
            row.splice(index,1)
        }
    },
    getters:{

    },
})


export default store