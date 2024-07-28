describe('Auth', () => {
  it('POST auth login ', async () => {
    const responseLogin = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30
      })
    })
    const data = responseLogin.json();
    console.log('data : ', data)

    expect(responseLogin.status).toBe(200)
  })
  it('Get user details using token, passes', async () => {
    const responseLogin = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30
      })
    })
    const dataLogin = await responseLogin.json();
    const token = dataLogin.token;
    console.log(`token : ${token}`)
    const responseMe = await fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    expect(responseMe.status).toEqual(200)
  })
  it('Get user details without token, fails', async () => {
    const responseMe = await fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '
      }
    })

    expect(responseMe.status).toBe(401)
  })
})
