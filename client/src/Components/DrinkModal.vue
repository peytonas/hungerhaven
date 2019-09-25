<template>
  <div id="drinkModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">add a drink</h5>
          <button class="btn btn-danger" data-dismiss="modal" aria-label="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addDrink()">
            <div class="form-group">
              <label for="title">title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="add a drink..."
                v-model="newDrink.title"
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
  name: "drinkModal",
  props: [],
  data() {
    return {
      newDrink: {}
    };
  },
  methods: {
    addDrink() {}
  },
  computed: {},
  components: {}
};
</script>
  <<style>
  
  </style>