<template>
    <v-layout>
      <v-flex>
        <p>testing user profile</p>
        <h1>Hello I'm {{this.$route.params}}
      </v-flex>
    </v-layout>
</template>

<script>
export {

  data: ()=>({
      username:'',
      email: '',
      phone:''
  })

}
</script>
