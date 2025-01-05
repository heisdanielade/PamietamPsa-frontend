<script setup>
import { ref, onMounted } from "vue";


const title = ref('PamiętamPsa - Polska');
const status = ref('pending');
const tasks = ref(['task 1', 'task 2', 'task 3']);
const newTask = ref('');
const link = ref('https://heisdanielade.xyz');

const toggleStatus = () => {
  if (status.value == 'active') {
    status.value = 'inactive';
  } else if (status.value == 'pending') {
    status.value = 'inactive';
  }
  else {
    status.value = 'active';
  }
};

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};

const deletetTask = (index) => {
  tasks.value.splice(index, 1);
};


onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.log(error);
  }
});

</script>


<template>
  <h1>{{ title }}</h1>
  <p v-if="status == 'active'">User is active</p>
  <p v-else-if="status == 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Submit</button>
  </form>


  <h3>Tasks: </h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deletetTask(index)">Delete</button>
    </li>
  </ul>

  <a :href="link" target="_blank">heisdanielade</a>
  <br>
  <button @click="toggleStatus()">Change status</button>
</template>


<style scoped>
h1 {
  color: red;
}
</style>
