var moment = require("moment");
const User = require("../models/customerSchema");

const user_get_index= (req, res) => {
    // result ==> array of objects
    console.log("--------------------------------------------");
    User.find()
      .then((result) => {
        res.render("index", { arr: result, moment: moment });
      })
      .catch((err) => {
        console.log(err);
      });
  }

const user_get_add= (req, res) => {
    res.render("user/add");
  }

const user_get_edit= (req, res) => {
    User.findById(req.params.id)
      .then((result) => {
        res.render("user/edit", { obj: result, moment: moment });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const user_get_view= (req, res) => {
    // result ==> object
    User.findById(req.params.id)
      .then((result) => {
        res.render("user/view", { obj: result, moment: moment });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const user_post_index= (req, res) => {
    User.create(req.body)
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const user_post_search=  (req, res) => {

    const searchText = req.body.searchText.trim()
  
    User.find({ $or: [{ fireName: searchText }, { lastName: searchText }] })
      .then((result) => {
        console.log(result);
        res.render("user/search", { arr: result, moment: moment });
      })
      .catch((err) => {
        console.log(err);
      });
  }


const user_delete_index=  (req, res) => {
    User.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.redirect("/");
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
const user_put_index=(req, res) => {
    User.updateOne({ _id: req.params.id }, req.body)
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  module.exports ={
    user_get_index,
    user_get_add,
    user_get_edit,
    user_get_view,
    user_post_index,
    user_post_search,
    user_delete_index,
    user_put_index}