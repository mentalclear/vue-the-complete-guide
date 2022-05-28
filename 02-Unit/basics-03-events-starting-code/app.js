const app = Vue.createApp({
  data() {
    return {
      counter: 5,
      confirmedName: '',
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
    // These are working together: 
    setName(event){ // Event is passed by the browser!
      this.name = event.target.value; // The way to get data from the event
    },
    // This on is looking for the enter key to be pressed.
    confirmName() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
    // < setName, confirmName, resetInput    
    setNameArgs(event, lastName){ // Event is passed by the browser, lastName from call!
      this.nameArgs = event.target.value + lastName; // The way to get data from the event
    },
    submitForm(){
      
    },
    signUp(){
      alert('Done!');
    }
  }
});

app.mount('#events');
