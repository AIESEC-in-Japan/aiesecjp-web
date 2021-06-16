<template>
    <div class='officer-table'>
    <tr v-for="(item, index) in listdata" :key="index">
        <th>{{item.position}}</th>
        <td>{{item.name}}</td>
    </tr>
    </div>

</template>

<script>
export default {
    props:{
        listdata: Array
    }
};
</script>

<style lang="scss" scoped>
table{
    width: 800px;
    font-size: 16px;
    letter-spacing: 2px;
    margin-top: 30px;
}

th, td{
    border-bottom-style: solid; 
    border-bottom-width: 0.5px;
    border-bottom-color: $gray;
    padding: 24px 16px;
}

th{
    width: 108px;
    text-align: left;
}

td{
    line-height: 21px;
}

.aboutus-table{
    &-container{
        width: 800px;
        margin: 50px auto;
      }
    
    &-title{
        color: $blue;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 2px;
        margin-top: 40px;
        margin-bottom: 20px;
      }
}

</style>