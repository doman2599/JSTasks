const clients = [{
  name: 'Филип Фрай',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [ 11700, 1980, 450, 5500 ]
}, {
  name: 'Мартин Скорсезе',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [ 440, 226, 7650, 2990, 70 ]
}, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [ 720 ]
},
{
  name: 'Альберт Кейн',
  email: 'kane.undead@rambler.un',
  isSubscribed: false,
  orders: [ 13, 256, 4650, 70 ]
},
];

subscribeCheck(clients)

function subscribeCheck(data){
  for (let i = 0; i < data.length; i++){
    if (data[i].isSubscribed === true){
      console.log(data[i].name + ' ваш заказ принят, подробности вашего заказа в письме,'+
      ' которое мы отправили на ' + data[i].email)
    }
  }
}
