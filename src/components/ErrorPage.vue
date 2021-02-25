<template>
    <div class="container-fluid">
    <div class="card text-white bg-danger mb-3" style="max-width align:center">
        <div class="row">
          <div class="col"></div>
          <div class="col-6"><img src="./404.png" class="card-img-top"></div>
          <div class="col"></div>
        </div>
        <div class="card-header"><router-link to="/"><button type="button" class="btn btn-success">Back To Home</button></router-link></div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'ErrorPage',

}
</script>
