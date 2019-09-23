<template>
  <div>
      <form @submit.prevent="create">
        <label for="">name</label>
          <input type="text" v-model="name">
          <label for="">password</label>
        <input type="password" v-model="password">
        <label for="">mail</label>
        <input type="mail" v-model="mail">
        <button>add</button>
      </form>
      

  </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            password: '',
            mail: '',
        }
    },
    methods: {
        async create () {
            const response = await fetch('http://localhost:3000/api/v1/users',{
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify({
                    name: this.name,
                    password: this.password,
                    mail: this.mail
                })
            })
            const data = await response.json()
            console.log(data)
            this.$router.push({name: 'list'})
        }
    }
}
</script>

<style>

</style>