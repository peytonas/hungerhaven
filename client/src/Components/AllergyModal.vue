<template>
  <div id="allergyModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">edit your allergies</h5>
          <button class="btn btn-danger" data-dismiss="modal" aria-label="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editAllergy()">
            <div class="form-group">
              <label for="title">title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="edit your allergies..."
                v-model="newAllergy.title"
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
  name: "allergyModal",
  props: [],
  data() {
    return {
      newAllergy: {}
    };
  },
  methods: {
    editAllergy() {}
  },
  computed: {},
  components: {}
};
</script>
  <<style>
  
  </style>