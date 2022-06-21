<template>
  <section class="container">
    <UserData
      :first-name="firstName"
      :last-name="lastName"
    />
    <button @click="setAge">
      Change Age
    </button>
    <div>
      <label for="first-name"><input
        id="first-name"
        v-model="firstName"
        type="text"
        placeholder="First Name"
      ></label>
      <label for="last-name"><input
        id="last-name"
        ref="lastNameInput"
        type="text"
        placeholder="Last Name"
      ></label>
      <button @click="setLastName">
        Set Last Name
      </button>
    </div>
    <!-- <div>
      <label for="first-name"><input
        id="first-name"
        type="text"
        placeholder="First Name"
        @input="setFirstName"
      ></label>
      <label for="last-name"><input
        id="last-name"
        type="text"
        placeholder="Last Name"
        @input="setLastName"
      ></label>
    </div> -->
  </section>
</template>

<script>
// import { ref } from 'vue'; // Work with values
import {
  ref, reactive, computed, watch, provide,
} from 'vue'; // Works with objects
import UserData from '@/components/UserData.vue';

export default {
  components: {
    UserData,
  },
  setup() {
    // const user = ref({
    const user = reactive({
      name: 'Dmitrii',
      age: 40,
    });
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const uAge = ref('41');

    // Using provide like this:
    provide('userAge', uAge);

    // const setFirstName = (event) => {
    //   firstName.value = event.target.value;
    // };

    // const setLastName = (event) => {
    //   lastName.value = event.target.value;
    // };

    const setAge = () => {
      user.age = 43;
      uAge.value = 43;
    };

    const setLastName = () => {
      lastName.value = lastNameInput.value.value;
    };

    const userName = computed(() => `${firstName.value} ${lastName.value}`);

    // watch(uAge, (newVal, oldVal) => {
    //   console.log(`Old age: ${oldVal}\nNew age: ${newVal}`);
    // });

    watch([uAge, userName], (newVals, oldVals) => {
      newVals.forEach((val) => console.log(`New val: ${val}`));
      oldVals.forEach((val) => console.log(`Old val: ${val}`));
    });

    return {
      user,
      userName,
      setAge,
      // setFirstName, setLastName,
      firstName,
      lastName,
      lastNameInput,
      setLastName,
      uAge,
    };
  },

  // provide() {
  //   return {}
  // }
};
// Initial setup:
// export default {
//   setup() {
//     const userName = ref('Dmitrii');

//     setTimeout(() => {
//       userName.value = 'Dmitrii Genrikh';
//     }, 2000);

//     return { userName };
//   },

//   // data() {
//   //   return {
//   //     userName: 'Maximilian',
//   //   };
//   // },
// };
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
