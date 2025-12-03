import * as api from "../../api";

export const user = {
    namespaced: true,

    state: {
        users: [],
        loading: false,
        error: null,
        errorMessage: "",
        data: [],
    },

    actions: {
        async fetchTrendings({ commit }) {
            commit("SET_LOADING", true)
            try {
                // if (this.users.length > 0) {
                //         commit('SET_USERS_DATA', this.users);
                // }
                    const response = await api.trendings.getTrendings();
                    commit('SET_USERS_DATA', response.data.items);
                
            } catch (error) {
                commit("SET_ERROR", {
                    error: true,
                    message: error.message
                });
            } finally {
                commit("SET_LOADING", false);
            }
        },
        async fetchReadme(store, { id, owner, repo }) {
            try {
                console.log(id, owner)
                const  {data}  = await api.readme.getReadme({ id, owner, repo });
                console.log("DATAVUEX", data)
                store.commit("SET_README", { id, content: data, })
                // console.log("Data", data)

            } catch (error) {
                store.commit("SET_ERROR", {
                    error: true,
                    message: error.message
                })
                console.log(error.message)
            }
        },

    },

    mutations: {

        SET_LOADING(state, payload) {
            state.loading = payload
        },
        SET_ERROR(state, payload) {
            state.error = payload.error;
            state.errorMessage = payload.message;
        },

        SET_USERS_DATA(state, payload) {

            if (payload.length > 0) {
                state.users = payload;
            } else {
                state.users = []
            }

        },
        SET_README(state, payload) {
            // console.log("SETREADME", payload)
            // console.log(state.users)
            state.users = state.users.map(repo => {
                // console.log("REPO", repo)
                if (payload.id === repo.id) {
                    repo.readme = payload.content
                    console.log("REPO", repo)
                    //  
                }

                return repo;
            })
        }
        // Тут я буду менять данные которые имею
    },

    getters: {
        getResponseDate(state) {
            return state.users
        },
        getLoadingAnswer(state) {
            return state.loading
        },
       
        // Тут я буду получать все данные нужные мне возвращать
    }



}

