<template>
    <div>
        <table v-if="viewNotif" id = "table">
        <tr v-for="(subscriber,index) in newSubscribers" :key="index">
          <td>
            {{subscriber.email}}
          </td>
        </tr>
      </table>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>