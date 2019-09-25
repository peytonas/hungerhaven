<template>
  <div id="dessertModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">add a dessert</h5>
          <button class="btn btn-danger" data-dismiss="modal" aria-label="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addDessert()">
            <div class="form-group">
              <label for="title">title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="add a main..."
                v-model="newDessert.title"
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
  name: "dessertModal",
  props: [],
  data() {
    return {
      newDessert: {}
    };
  },
  methods: {
    addDessert() {}
  },
  computed: {},
  components: {}
};
</script>
  <<style>
  
  </style>