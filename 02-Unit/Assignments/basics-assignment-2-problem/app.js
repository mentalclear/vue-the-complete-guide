const app = Vue.createApp({
    data() {
        return {
            alertText: 'Hello World!',
            output: '',
            output2: '',
            confirmedOutput: '',
        };
    },
    methods: {
        alert() {
            alert(this.alertText);
        },
        setOutput(event) {
            this.output = event.target.value;
        },
        setOutput2(event) {
            this.output2 = event.target.value;
        },
        confirmOutput() {
            this.confirmedOutput = this.output;
        },

    }
});

app.mount('#assignment');