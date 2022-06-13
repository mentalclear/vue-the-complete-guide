const app = Vue.createApp({
    data() {
        return {
            name: 'Dimetrio',
            age: 42,
            imgUrl: 'https://avatars.githubusercontent.com/u/17571166?v=4',
        };
    },
    computed: {
        ageInFive() {
            return this.age + 5;
        },
        randNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');