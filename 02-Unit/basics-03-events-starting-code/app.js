const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      nameArgs: '',
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    subtract(num) {
      this.counter = this.counter - 5;
    },
    setName(event){ // Event is passed by the browser!
      this.name = event.target.value; // The way to get data from the event
    },
    setNameArgs(event, lastName){ // Event is passed by the browser, lastName from call!
      this.nameArgs = event.target.value + lastName; // The way to get data from the event
    }
  }
});

app.mount('#events');
