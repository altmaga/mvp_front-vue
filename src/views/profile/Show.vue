<template>
  <div class="container-fluid profile_detail">
    <div class="profile_detail-bg row">
      <div class="back" @click="$router.go(-1)">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </div>
      <div class="col-12">
        <div class="profile-title general-title">
          <h2>Mon compte</h2>
        </div>
      </div>
    </div>
    <div class="profile_detail-content row">
      <div class="col-12">
        <div class="avatar">
          <div class="bg">
            <i class="fa fa-user-o" aria-hidden="true"></i>
          </div>
        </div>
        <div class="infos">
          <h3 class="id">{{userInfo.familyName}} {{userInfo.givenName}}</h3>
          <p class="email">{{userInfo.email}}</p>
        </div>
        <div class="actions">
          <button class="action edit">Modifier</button>
          <button class="action delete">Supprimer</button>
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
<style lang="scss">
  .profile_detail {
    &-bg {
      position: relative;
      // background: $gradient-2;
      min-height: 80px;
      // padding-top: 20px;

      > .col-12 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .profile-title {
          color: $purple;

           h2 {
             margin-bottom: 0;
           }
        }
      }

      .back {
        position: absolute;
        top: 10px;
        left: 15px;
        font-size: 26px;
        color: $purple;
        z-index: 2;
        width: auto;
      }
    }

    &-content {
      padding-top: 20px;

      .avatar {
        text-align: center;

        .bg {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: $lightgrey;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 30px;

          i {
            color: $white;
            font-size: 40px;
          }
        }
      }

      .infos {
        text-align: center;
        margin: 30px;

        .id {
          color: #3E3F68;
          font-size: 28px;
          margin-bottom: 0;
        }

        .email {
          color: #6E7FAA;
          font-size: 18px;
        }
      }

      .actions {
        display: flex;
        align-items: center;
        justify-content: center;

        .action {
          padding: 10px 15px;
          font-size: 18px;
          border-radius: 8px;
          font-weight: $regular;
          min-width: 150px;

          &:first-child {
            margin-right: 5px;
            color: $white;
            background-color: $flashpurple;
            border: 1px solid $flashpurple;
          }

          &:last-child {
            margin-left: 5px;
            color: #8A98BA;
            border: 1px solid #8A98BA;
          }
        }
      }
    }
  }
</style>