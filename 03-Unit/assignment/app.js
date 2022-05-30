const app = Vue.createApp({
    data() {
      return { 
        tasks: ['Task1','Task2','Task3'],
        entredTask: '',
        showList: true,                
      };      
    },
    computed: {
      bttnCaption() {  // Remember! "computed" is for functions!!!
        return this.showList ? 'Hide' : 'Show';
      }
    },
    methods: {
      addTask() {
        this.tasks.push(this.entredTask);
      },
      updShowList() {
        this.showList = !this.showList;        
      }
    },
  });
  
  app.mount('#assignment');