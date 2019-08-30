<template>
  <section class="details">
    <h1>{{ msg }}</h1>
    <div :hidden="initialize == 1">
      <h2>SELECT A USER</h2>
    </div>

    <form class="infos" :hidden="initialize == 0">
      <div class="field">
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          @change="updateName(name)"
          v-model="name"
          :disabled="canEditName == 0"
        />
        <label for="username">
          <img @click="allowEditName()" src="@/assets/editBtn.png" />
        </label>
      </div>
      <div class="field">
        <input
          type="email"
          placeholder="Email"
          id="useremail"
          name="useremail"
          @change="updateEmail(email)"
          v-model="email"
          :disabled="canEditEmail == 0"
        />
        <img @click="allowEditEmail()" src="@/assets/editBtn.png" />
      </div>
    </form>
  </section>
</template>

<script src="./Details.js"></script>
<style scoped src="./Details.css"></style>