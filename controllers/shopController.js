const Shop = require('../models/shop')
const Menu = require('../models/menu')
const config = require('../config/index')

exports.index = async (req, res, next) => {

  const shop = await Shop.find().select('name photo location').sort({ _id: -1 })

  const shopWithPhotoDomain = await shop.map((shop, index) => {
    return {
      id: shop.id,
      name: shop.name,
      photo: config.DOMAIN+"/images/" + shop.photo,
      location: shop.location,
    }
  });

  res.status(200).json({
    data: shopWithPhotoDomain
  })
}

exports.menu = async (req, res, next) => {
  // const menu = await Menu.find().select('+name -price')
  // const menu = await Menu.find().where('price').gt(200)
  const menu = await Menu.find().populate('shop').select('name price shop')

  res.status(200).json({
    data: menu
  })
}

exports.byid = async (req, res, next) => {
  const { id } = req.params
  // const menu = await Menu.find().select('+name -price')
  // const menu = await Menu.find().where('price').gt(200)
  const menu = await Shop.findById({_id: id}).populate('menus')

  res.status(200).json({
    data: menu
  })
}