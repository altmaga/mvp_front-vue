<template>
  <div class="profile_detail">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="back" @click="$router.go(-1)">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          {{ userInfo.givenName }}
          {{ userInfo.familyName }}
          {{ userInfo.email }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "profileShow",
  components: {},
  data() {
    return {
    };
  },
  methods: {
    ...mapActions({
      fetchOneUserInfo: "user/fetchOneUserInfo",
    })
  },
  computed: {
    ...mapState(
      {
        userInfo: (state) => state.user.userInfo,
      }
    ),
  },
  mounted() {
    this.fetchOneUserInfo()
  }
};
</script>