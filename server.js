const {
  faker
} = require('@faker-js/faker')

module.exports = () => {

  const data = {
    people: []
  }

  for (let id = 1; id <= 50; id++) {
    data.people.push({
      id,
      name: `${faker.name.findName()} ${faker.name.lastName()}`,
      avatar: `${faker.image.avatar()}`,
      survivor: faker.datatype.boolean()
    })
  }

  return data

}