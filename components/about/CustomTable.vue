<template>
  <div class="aboutus-table">
    <tr v-for="(item, index) in listdata" :key="index">
      <th>{{ item.caption }}</th>
      <td>{{ item.description }}</td>
    </tr>
  </div>
</template>

<script>
export default {
  props: {
    listdata: Array,
  },
};
</script>

<style lang="scss" scoped>
th,
td {
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: $gray;
  padding: 24px 16px;

  @include sp{
      padding: 15px 15px;
  }
}

th {
  width: 108px;
  text-align: left;

  @include sp{
      width: 100px;
  }

}

td {
  line-height: 21px;

  @include sp{
      width: 250px;
  }
}

</style>