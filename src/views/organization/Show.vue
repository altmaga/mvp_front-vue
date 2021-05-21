<template>
  <div class="organization_detail">
    <div class="container-fluid organization_detail-bg" :style="{backgroundImage:`url(${organization.bg})`}">
      <div class="back" @click="$router.go(-1)">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </div>
      <div class="overlay"></div>
      <ul class="socials">
        <li><a v-bind:href="`tel:${organization.phone}`" class="socials-item"><i class="fa fa-phone" aria-hidden="true"></i>{{organization.phone}}</a></li>
        <li><a v-bind:href="`${organization.fb}`" class="socials-item"><i class="fa fa-facebook" aria-hidden="true"></i></a>{{organization.fb}}</li>
        <li><a v-bind:href="`${organization.insta}`" class="socials-item"><i class="fa fa-instagram" aria-hidden="true"></i></a>{{organization.insta}}</li>
      </ul>
    </div>
    <div class="container organization_detail-content">
      <div class="row">
        <div class="col-12">
          <div class="organization">
            <div class="head">
              <h3>{{organization.legalName}}</h3>
              <div v-for="category in organization.categories" :key="category._id" class="organization-card_list-category">
                <p>{{category.name}}</p>
              </div>
              <div class="nb_favoris">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <span>4</span>
              </div>
            </div>
            <div class="address">
              <p>{{organization.address}}</p>
            </div>
            <div class="infos">
              <div class="infos-item">
                <b-button v-b-toggle.collapse-1 variant="collapse">
                  <span class="title">Mode(s) de livraison</span>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </b-button>
                <b-collapse id="collapse-1">
                  <b-card>
                    <p class="card-text">{{organization.delivery}}</p>
                  </b-card>
                </b-collapse>
              </div>
              <div class="infos-item">
                <b-button v-b-toggle.collapse-2 variant="collapse">
                  <span class="title">Horaires d'ouverture</span>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </b-button>
                <b-collapse id="collapse-2">
                  <b-card>
                    <p class="card-text">{{organization.hours}}</p>
                  </b-card>
                </b-collapse>
              </div>
              <div class="infos-item">
                <b-button v-b-toggle.collapse-3 variant="collapse">
                  <span class="title">Nous découvrir</span>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </b-button>
                <b-collapse id="collapse-3">
                  <b-card>
                    <p class="card-text">{{organization.description}}</p>
                  </b-card>
                </b-collapse>
              </div>
            </div>
          </div>
          <div class="products">
            <div class="product-title general-title">
              <h2>Nos produits</h2>
            </div>
            <div class="product_list">
              <ProductCard
                v-for="product in organization.products"
                :key="product._id"
                :product="product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProductCard from "@/components/product/ProductCard";
// import OrganizationInfos from "@/components/organization/OrganizationInfos";

export default {
  name: "organizationShow",
  components: {
    ProductCard,
    // OrganizationInfos
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      organization: (state) => state.organization.oneOrganization,
    })
  },
  methods: {
    ...mapActions({
      fetchOneOrganization: "organization/fetchOneOrganization",
    }),
  },
  mounted() {
    this.fetchOneOrganization(this.$route.params.id);
  },
};
</script>

<style lang="scss">
.organization_detail {
  &-bg {
    position: relative;
    background-size: cover;
    min-height: 300px;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .back {
      position: absolute;
      top: 10px;
      left: 15px;
      font-size: 26px;
      color: $white;
      z-index: 2;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 150px;
      z-index: 1;
      width: 100%;
      background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.45) 100%);
    }

    .socials {
      padding: 12px 30px;
      border-radius: 40px;
      margin-bottom: 18px;
      display: flex;
      align-items: center;
      position: relative;
      z-index: 1;

      &-item {
        color: $flashpurple;
        display: flex;
        text-decoration: none;
        align-items: center;
        justify-content: center;
        margin: 0 5px;

        i {
          margin: 0 5px;
          background-color: $white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      &:before {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 40px;
        backdrop-filter: blur(6px);
      }
    }
  }

  &-content {
    padding-top: 20px;

    .organization {
      margin-bottom: 20px;
      .head {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      h3 {
        margin-top: 0;
        font-size: 22px;
        font-weight: $bold;
        text-decoration: inherit;
        text-transform: capitalize;
        margin-bottom: 0;
      }

      .organization-card_list-category {
        p {
          margin: 0;
          padding: 3px 12px;
          background-color: $flashpurple;
          font-size: 12px;
          color: $white;
          border-radius: 22px;
          margin: 0 5px;
        }
      }

      .nb_favoris {
        position: absolute;
        top: 0;
        right: 0;
        background-color: $lightgrey;
        padding: 3px 12px;
        border-radius: 20px;
        display: flex;
        align-items: center;

        i {
          margin-right: 5px;
          color: $yellow;
        }

        span {
          color: $grey;
        }
      }
    }

    .address {
      color: $flashpurple;
      font-size: 14px;
      font-weight: $regular;
      margin-bottom: 15px;
    }

    .infos {
      &-item {
        margin-bottom: 0;

        .btn {
          &.btn-collapse {
            padding-left: 0;
            padding-right: 0;
            border: 0;
            color: $grey;
            font-size: 14px;
            display: flex;
            align-items: center;

            .title {
              margin-right: 5px;
            }

            i {
              transition: all .3s ease;
            }

            &:hover, &:focus, &:active {
              outline: 0;
              box-shadow: none;
            }

            &.not-collapsed {
              i {
                transform: rotate(90deg);
              }
            }
          }
        }

        .collapse {
          .card {
            border: 0;
            .card-body {
              // padding-left: 0;
              // padding-right: 0;
              padding: 5px 0;

              .card-text {
                color: $grey;
                font-size: 12px;
                font-weight: $regular;
              }
            }
          }
        }
      }
    }
    }
  }
}
</style>