const user = {
  name: 'Avtandil Tursunbekov',
  address: {
    street: '8 mkr 47 dom 1 kv'
  }
}
console.log(user)


const copyUser = {...user}


copyUser === user

console.log(copyUser.address)
