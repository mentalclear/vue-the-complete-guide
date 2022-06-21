// import UserAlert from '@/components/UserAlert.vue';

export default {
  // This works for me actually:
  //   components: {
  //     UserAlert,
  //   },
  data() {
    return {
      alertIsVisible: false,
    };
  },
  methods: {
    showAlert() {
      this.alertIsVisible = true;
    },
    hideAlert() {
      this.alertIsVisible = false;
    },
  },
};
