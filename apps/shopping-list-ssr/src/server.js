// server.js
const Vue = require('vue')
const express = require('express')
const serverRenderer = require('vue-server-renderer').createRenderer()

const app = express()

app.get('*', (req, res) => {
  const appInstance = new Vue({
    data: {
      items: ['Milk', 'Eggs', 'Bread'],
    },
    template: `
      <div>
        <h1>Shopping List</h1>
        <ShoppingList :items="items" />
        <AddItemForm />
      </div>
    `,
    components: {
      ShoppingList: require('./src/components/ShoppingList.vue').default,
      AddItemForm: require('./src/components/AddItemForm.vue').default,
    },
  })

  serverRenderer.renderToString(appInstance, (err, html) => {
    if (err) {
      console.error(err)
      return res.status(500).end('Internal Server Error')
    }
    res.end(html)
  })
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})