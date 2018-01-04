fetch('https://mywebsite.com/endpoint', {
  method: 'post',
  headers: {
    'accept': 'application/json',
    'Content-type': 'application/json'
  },
  body: JSON.stringify({
    firstName: 'weiqiang'
  })
})
