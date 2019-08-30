export default {
  props: {
    name: String,
    email: String,
    userID: [String, Number],
    users: Array,
    initialize: Boolean
  },

  data() {
    return {
      msg: "Details",
      canEditName: false,
      canEditEmail: false,
      sendName: this.name,
      sendEmail: this.email
    };
  },

  methods: {
    updateName(name) {
      this.sendName = name;
      this.$emit("update:name", this.sendName);
      this.users[this.userID - 1].name = this.sendName;
      this.allowEditName();
      console.log(this.users);
    },

    updateEmail(email) {
      this.sendEmail = email;
      this.$emit("update:email", email);
      this.users[this.userID - 1].email = this.sendEmail;
      this.allowEditEmail();
    },

    allowEditName() {
      if (this.canEditName == true) {
        this.canEditName = false;
      } else {
        this.canEditName = true;
      }
    },
    allowEditEmail() {
      if (this.canEditEmail == true) {
        this.canEditEmail = false;
      } else {
        this.canEditEmail = true;
      }
    }
  },
  computed: {
    // updateName(name) {
    //   this.sendName = name;
    //   this.$emit("input", this.sendName);
    //   this.users[this.userID - 1].name = this.sendName;
    //   this.allowEditName();
    //   console.log(this.users);
    // }
  }
};
