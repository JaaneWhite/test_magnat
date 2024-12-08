import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            authorized: false,
            userName: '',
            cities: [
                {id: 1, name: 'Санкт-Петербург'},
                {id: 2, name: 'Москва'},
                {id: 3, name: 'Казань'},
                {id: 4, name: 'Владивосток'},
                {id: 5, name: 'Краснодар'},
                {id: 6, name: 'Астрахань'},
                {id: 7, name: 'Вологда'},
                {id: 8, name: 'Мурманск'},
                {id: 9, name: 'Якутск'},
                {id: 10, name: 'Хабаровск'},
            ],
            selectedCity: '',
            text: `Lorem ipsum dolor sit amet consectetur. Elementum donec a accumsan egestas et non diam nunc. 
            Semper aenean pharetra sit morbi. Est sed enim ut commodo adipiscing curabitur elementum tristique vel. 
            Felis cras nisi et blandit. Vitae aliquam interdum aliquam ac senectus sit non erat. 
            Euismod eu non id fermentum urna nunc scelerisque cursus vel. 
            Phasellus ullamcorper congue ac tortor quam in mauris. Aliquam suspendisse erat dictumst libero. 
            Commodo facilisis accumsan mattis pellentesque turpis nibh. Amet aliquam volutpat dictum risus nulla 
            rhoncus arcu turpis tellus. Cursus feugiat quam arcu leo purus suspendisse cursus risus quis. 
            Massa lobortis dolor a cras diam. Mi purus volutpat pulvinar accumsan dolor ultricies. 
            Ipsum cursus proin mauris in. Bibendum amet ultrices faucibus tellus mauris magna. 
            Eget leo sed aliquam eget tempus eget viverra tincidunt sit. Tortor non elit felis cras cras mi eget. 
            Ut aliquet nibh eu at. Laoreet tincidunt porttitor tellus tristique.`
        }
    },
    mutations: {
        login(state, userName) {
            state.authorized = true
            state.userName = userName
        },
        logout(state) {
            state.authorized = false
            state.userName = ''
        },
        selectCity(state, city) {
            state.selectedCity = city
        }

    }
})