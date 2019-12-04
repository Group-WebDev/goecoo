<template>
    <div>
        <button color ="danger" class ="notification">notif</button>
    </div>
</template>
<script>
export default {
    name:{
        Notification
    }
}
</script>
<style scoped>
.notification {
  background-color: #555;
  color: white;
  text-decoration: none;
  padding: 15px 26px;
  position: relative;
  display: inline-block;
  border-radius: 2px;
}

.notification:hover {
  background: red;
}

.notification .badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
  background: red;
  color: white;
}
</style>