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
  padding: 2.4rem 0;
  font-size: 1rem;

  @include sp {
    padding: 1rem 1rem;
    font-size: 0.85rem;
  }
}

th {
  text-align: left;
  width: 6.75vw;

  @media(max-width:959px){
    width: 14vw;
  }

  @include sp {
    width: 20%;
    padding: 1rem 0;
  }
}

td {
  line-height: 1.3rem;
  padding-left: 6vw;


  @include sp {
    width: 80%;
    padding: 1rem;
  }
}

</style>
