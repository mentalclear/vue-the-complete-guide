<template>
  <BaseDialog
    v-if="inputIsInvalid"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>Unfortunately at least one input is invalid</p>
      <p>Please make sure to enter at least a few characters into the input fields</p>
    </template>
    <template #actions>
      <BaseButton @click="confirmError">
        Ok
      </BaseButton>
    </template>
  </BaseDialog>
  <BaseCard>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title
          <input
            id="title"
            v-model="titleInput"
            name="title"
            type="text"
          >
        </label>
      </div>
      <div class="form-control">
        <label for="desc">Description
          <textarea
            id="desc"
            v-model="descInput"
            name="desc"
            rows="3"
          />
        </label>
      </div>
      <div class="form-control">
        <label for="link">Link
          <input
            id="link"
            v-model="linkInput"
            name="link"
            type="url"
          >
        </label>
      </div>
      <div>
        <BaseButton type="submit">
          Add Resource
        </BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';

export default {
  components: { BaseCard, BaseButton, BaseDialog },
  inject: ['addResource'],
  data() {
    return {
      descInput: '',
      linkInput: '',
      titleInput: '',
      inputIsInvalid: false,
    };
  },
  methods: {
    submitData() {
      if (this.descInput === '' || this.linkInput === '' || this.titleInput === '') {
        this.inputIsInvalid = true;
        return;
      }
      this.addResource(this.titleInput, this.descInput, this.linkInput);
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
