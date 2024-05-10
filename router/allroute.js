const express = require('express')
const router = express.Router()
var allcontrol = require("../Controller/allcontrol");

// GET Requst
router.get("/",allcontrol.user_get_index);
  
  router.get("/user/add.html",allcontrol.user_get_add);
  
  router.get("/edit/:id",allcontrol.user_get_edit);
  
  router.get("/view/:id",allcontrol.user_get_view);
  

  // POST Requst
  router.post("/user/add.html",allcontrol.user_post_index );
  
  router.post("/search",allcontrol.user_post_search );
  
  // DELETE Request
  router.delete("/edit/:id",allcontrol.user_delete_index);
  
  // PUT Requst
  router.put("/edit/:id",allcontrol.user_put_index);

module.exports = router