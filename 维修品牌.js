$(document).ready(function () {
  $('.brand-select-item-children-item:not("#allBrand")').on('click',function (e) {
    if($('.brand-select-item-children-item.selected:not("#allBrand")').length>=15){
      alert('最大只能选择15条')
    }else{
      $(e.target).toggleClass('selected')
      $('#allBrand').removeClass('selected')
    }
  })
  $('#allBrand').on('click',function (e) {
    $('.brand-select-item-children-item').removeClass('selected')
    $('#allBrand').addClass('selected')
  })
})


