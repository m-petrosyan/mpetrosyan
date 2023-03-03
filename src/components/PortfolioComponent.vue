<template>
  <section id="portfolio">
    <div class="wrapper">
      <div class="card" v-for="item in projects" :key="item.title">
        <div class="item">
          <div class="img" :style="{backgroundImage: getImg(item.img)}"/>
          <div class="title">{{ item.title }}</div>
          <div class="title">{{ checkLength(item.description) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import mainMixin from "@/mixins/mainMixin";

export default {
  name: "PortfolioComponent",
  mixins: [mainMixin],
  data() {
    return {
      directory: 'skills_icons',
      projects: [
        {
          title: 'Task management system',
          img: 'tms.jpg',
          href: 'https://github.com/m-petrosyan/tms',
          description: 'Welcome to our task management website! Here\'s a guide on how to use platform:\n' +
              'Registering an Account: To use our website, you need to register for an account. Click on the "Register" button on the homepage and fill out the required information, including your name, email address, and password.\n' +
              'Editing Your Profile: Once you\'re logged in, you can edit your profile information by clicking on the "Profile" button in the navigation bar. Here, you can update your name, email, and password.\n' +
              'Creating a Task: To create a new task, click on the "Create Task" button on the homepage. You will be prompted to fill out the task details, such as the title, description, due date, and assignee.\n' +
              'Assigning an Assignee: You can assign a task to a specific user by selecting their name from the drop-down menu in the "Assignee" field. If you leave this field blank, the task will be assigned to you by default.\n' +
              'Updating Task Progress: As you work on a task, you can update its progress by clicking on the task and adjusting the progress bar. This will help you and your team track the status of the task.\n' +
              'Searching for Tasks: To search for tasks, click on the "Search" button in the navigation bar. Here, you can search for tasks based on their title or description.\n' +
              'Editing Your Own Tasks: You can only edit tasks that you have created. To edit a task, click on the task and make the necessary changes. If you need to assign the task to a different user, you can do so by adjusting the "Assignee" field.'
        }
      ]
    }
  }
}
</script>

<style scoped>
#portfolio {

}
</style>