<template>
  <div id="addressModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">edit your address</h5>
          <button class="btn btn-danger" data-dismiss="modal" aria-label="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editAddress()">
            <div class="form-group">
              <label for="title">title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="edit your address..."
                v-model="newAddress.title"
                required
              />
            </div>
            <button class="btn btn-danger">submit</button>
          </form>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "addressModal",
  props: [],
  data() {
    return {
      newAddress: {}
    };
  },
  methods: {
    editAddress() {}
  },
  computed: {},
  components: {}
};
</script>
  <<style>
  
  </style>