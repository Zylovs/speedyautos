const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.make.toLowerCase().includes(value) ||
      user.model.toLowerCase().includes(value) ||
      user.color.toLowerCase().includes(value) ||
      user.year.toLowerCase().includes(value) ||
      user.category.toLowerCase().includes(value) ||
      user.engine.toLowerCase().includes(value) ||
      user.miles.toLowerCase().includes(value) ||
      user.price.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})
 fetch("JS/data.Json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const make = card.querySelector("[data-make]")
      const model = card.querySelector("[data-model]")
      const color = card.querySelector("[data-color]")
      const year = card.querySelector("[data-year]")
      const category = card.querySelector("[data-category]")
      const engine = card.querySelector("[data-engine]")
      const miles = card.querySelector("[data-miles]")
      const price = card.querySelector("[data-price]")
      const img = card.querySelector("[data-img]")
      make.textContent = user.make
      model.textContent = user.model
      color.textContent = user.color
      year.textContent = user.year
      category.textContent = user.category
      engine.textContent = user.engine
      miles.textContent = user.miles
      price.textContent = user.price
      img.textContent = user.img
      userCardContainer.append(card)
      return { make: user.make, model: user.model,color: user.color, year: user.year,
        category: user.category, engine: user.engine , miles: user.miles, price: user.price,image: user.image,
        element: card }
    })
  })