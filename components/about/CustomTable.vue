<template>
  <div class="aboutus-table">
    <table>
      <tr
        v-for="(item, index) in listData"
        :key="index"
      >
        <th>{{ item.caption }}</th>
        <td>{{ item.description }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
.aboutus-table{
  font-family: $fonts;
}
th,
td {
  border-bottom-style: solid;
  border-bottom-width: 0.03rem;
  border-bottom-color: $gray;
  padding: 2.5rem 0;
  font-size: 1rem;

  @include sp {
    padding: 1rem 1rem;
  }
}

th {
  text-align: left;
  width: 6.75rem;

  @include sp {
    width: 6.25rem;
  }
}

td {
  line-height: 1.3rem;
  padding-left: 6rem;


  @include sp {
    width: 15.6rem;
  }
}

</style>
