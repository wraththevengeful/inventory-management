const db = require("../db/queries")

async function getOpenAddItemForm(req, res) {
    const categoryrows = await db.getAllCategories();
    const vendorsrows = await db.getAllVendors();
    // console.log(categoryrows, vendorsrows);
    res.render("addItemForm", { categories: categoryrows, vendors: vendorsrows });
}

async function getOpenAddCategoryForm(req, res) {
    res.render("addCategoryForm");
}

async function getOpenAddVendorForm(req, res) {
    res.render('addVendorForm');
}

async function postAddNewItem(req, res) {
    const item = {
        name: req.body.name,
        mrp:req.body.mrp,
        quantity:req.body.quantity,
        description:req.body.description,
        vendorid:req.body.vendorid,
        category:req.body.category,
        imageurl:req.body.imageurl
    }
    await db.addNewItem(item);
    res.redirect('/');
}

async function postAddNewCategory(req,res) {
    const category = {
        name: req.body.name,
    }

    await db.addNewCategory(category);
    res.redirect('/');
}

async function postAddNewVendor(req, res) {
    const vendor = {
        id:(req.body.id).toLowerCase(),
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
    }

    await db.addNewVendor(vendor);
    res.redirect('/');
}

module.exports = {
    getOpenAddItemForm,
    getOpenAddCategoryForm,
    getOpenAddVendorForm,
    postAddNewItem,
    postAddNewCategory,
    postAddNewVendor
}