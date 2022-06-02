<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :id="topic.id"
      :key="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    />
  </ul>
</template>

<script>
export default {
  inject: ['topics'],
};
</script>
