<template>
  <section class="container">
    <div class="userlist">
      <h1>{{ msg }}</h1>
      <ul>
        <li
          v-for="(user, key) in users"
          :key="user.id"
          @click="selectElement(user)"
          class="username"
        >
          <div>{{user.name}}</div>
          <div>
            <img @click="$delete(users, key)" src="@/assets/deleteBtn.png" />
          </div>
        </li>
      </ul>
      <div class="add">
        <img @click="addItem()" src="@/assets/addBtn.png" />
      </div>
    </div>
    <Details
      v-model="name"
      :initialize="initialize"
      :users.sync="users"
      :name.sync="name"
      :email.sync="email"
      :userID="userID"
    />
  </section>
</template>


<script src="./UserList.js"></script>
<style scoped src="./UserList.css"></style>