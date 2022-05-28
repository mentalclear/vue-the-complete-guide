const app = Vue.createApp({
    data() {
        return {
            number: 0,
        };
    },
    computed: {
        result() {
            if (this.number < 37) {
                return 'Not there yet!';
            } else if (this.number === 37) {
                return this.number;
            } else {
                return 'Too much!';
            }
        }
    },
    methods: {
        addNum(num) {
            this.number += num;
        },
    },
    watch: {
        result() {
            setTimeout(() => { this.number = 0; }, 5000);
        },
    },
});

app.mount('#assignment');