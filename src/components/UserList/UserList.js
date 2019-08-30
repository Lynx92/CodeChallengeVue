import Details from "../Details/Details.vue";

export default {
  components: {
    Details
  },

  data() {
    return {
      users: [],
      msg: "Userlist",
      name: "",
      email: "",
      userID: "",
      initialize: false
    };
  },

  mounted() {
    fetch("https://my-user-manager.herokuapp.com/users")
      .then(response => response.json())
      .then(data => {
        this.users = data;
      });
  },
  methods: {
    selectElement: function(index) {
      this.initialize ? null : (this.initialize = true);
      this.userID = index.id;
      this.name = index.name;
      this.email = index.email;
    },

    addItem: function() {
      this.users.push({
        id: this.users.length + 1,
        name: "New User",
        email: "newuser@email.com"
      });
    }
  }
};
