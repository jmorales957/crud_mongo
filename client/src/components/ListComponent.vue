<template>
  <div>
      <ul>
          <li v-for="user in rows" :key="user._id" >{{user.name}}

              <form @submit.prevent="edit" >
                
              <input type="hidden" v-model="user._id" id="id">
              <label for="">name</label>
          <input type="text" v-model="user.name" id="name">
          <label for="">password</label>
        <input type="password" v-model="user.password" id="password">
        <label for="">mail</label>
        <input type="mail" v-model="user.mail" id="mail">
              <button> edit</button> 
              </form>  
          
          
          
          <form @submit.prevent="deleted" >
              <input type="hidden" v-model="user._id" id="id">
              <button> delete</button> 
              </form> </li>
      </ul>
  </div>
</template>

<script>

export default {
    data() {
        return {
            rows: [],
            
            
        }
    },
    mounted() {
        this.list()
    },
    methods: {
        async list() {
            const response = await fetch('http://localhost:3000/api/v1/users',{
                headers: {
                    'Content-type': 'application/json'
                }
            })

            const data = await response.json()
            this.rows = data
        },
        async deleted() {
            var id = document.getElementById('id').value
            const response = await fetch('http://localhost:3000/api/v1/users/delete',{
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify({
                    id: id
                })

            })

            const data = await response.json()
            this.rows = data
             this.$router.push({name: 'list'})

        },
        async edit() {
            var id = document.getElementById('id').value
           var name = document.getElementById('name').value

            var password = document.getElementById('password').value

            var mail = document.getElementById('mail').value

            const response = await fetch('http://localhost:3000/api/v1/users/update',{
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify({
                    id: id,
                    name: name,
                    password: password,
                    mail: mail
                })

            })

            const data = await response.json()
            this.rows = data
             this.$router.push({name: 'list'})

        }
    }
}
</script>

<style>

</style>