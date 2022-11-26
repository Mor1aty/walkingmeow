import {createStore} from 'vuex'

interface State {
    // 顶部菜单活跃 index
    topMenuActiveIndex: string
}

export default createStore({
    state: {
        topMenuActiveIndex: '0'
    },
    getters: {},
    mutations: {
        changeTopMenuActiveIndex(state: State, topMenuActiveIndex: string) {
            state.topMenuActiveIndex = topMenuActiveIndex
        }
    },
    actions: {},
    modules: {}
})
