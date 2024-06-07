// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// const { User } = require('../class/user')

// // ================================================================
// router.get('/user-list', function (req, res) {
//   return res.render('user-list', {
//     name: 'user-list',
//     component: ['back-button'],
//     title: 'User list page',
//     data: {},
//   })
// })
// router.get('/user-list-data', function (req, res) {
//   const list = User.getList()
// })

// Підключаємо роутер до бек-енду
module.exports = router
