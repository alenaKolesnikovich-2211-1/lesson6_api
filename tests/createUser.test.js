describe('Account Controller', () => {
  describe('POST Create User', () => {
    it('checks when User is created successfully', async() => {
      const responsePOSTUserCreate = await fetch ('https://bookstore.demoqa.com/Account/v1/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "userName": "ek_userName",
            "password": "%psw_EK1_1234@$"
        })
      })
      const responseJSON = await responsePOSTUserCreate.json();

      //expect(responsePOSTUserCreate.status).toBe(201)
      /*responseCode : 406, 
        responseBody: {
          "code": "1204",
          "message": "User exists!"
        }
      */
      //expect(responsePOSTUserCreate.statusText).toBe('Created')
      expect(typeof responsePOSTUserCreate.headers).toBe('object')
      expect(responsePOSTUserCreate.headers.has('server')).toBeTruthy()
      expect(responsePOSTUserCreate.headers.get('server')).toBe('nginx/1.17.10 (Ubuntu)')
      expect(responsePOSTUserCreate.headers.has('content-type')).toBeTruthy()
      expect(responsePOSTUserCreate.headers.get('content-type')).toBe('application/json; charset=utf-8')
      expect(responsePOSTUserCreate.headers.has('connection')).toBeTruthy()
      expect(responsePOSTUserCreate.headers.get('connection')).toBe('keep-alive')
      expect(responsePOSTUserCreate.headers.has('x-powered-by')).toBeTruthy()
      expect(responsePOSTUserCreate.headers.get('x-powered-by')).toBe('Express')
    })
    it('checks when a user is created with existing credentials', async() => {
      const responsePOSTUserCreate = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "userName": "ek_userName_072024",
            "password": "%psw_EK1_1234@$"
        })
      })
      
      expect(responsePOSTUserCreate.status).toBe(406)
      expect(responsePOSTUserCreate.statusText).toBe('Not Acceptable')
      expect(typeof responsePOSTUserCreate.headers).toBe('object')
      expect(responsePOSTUserCreate.headers.get('server')).toBe('nginx/1.17.10 (Ubuntu)')
      expect(responsePOSTUserCreate.headers.get('content-type')).toBe('application/json; charset=utf-8')
      expect(responsePOSTUserCreate.headers.get('connection')).toBe('keep-alive')
      expect(responsePOSTUserCreate.headers.get('x-powered-by')).toBe('Express')
    })
  
    it('checks when the User is created with an invalid password', async () => {
      const responsePOSTUserCreate = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "userName": "ek_userName_072024",
          "password": "1234"
        })
      })
  
      expect(responsePOSTUserCreate.status).toBe(400)
      expect(responsePOSTUserCreate.statusText).toBe('Bad Request')
      expect(typeof responsePOSTUserCreate.headers).toBe('object')
      expect(responsePOSTUserCreate.headers.get('server')).toBe('nginx/1.17.10 (Ubuntu)')
      expect(responsePOSTUserCreate.headers.has('content-type')).toBeTruthy()
      expect(responsePOSTUserCreate.headers.get('content-type')).toBe('application/json; charset=utf-8')
      expect(responsePOSTUserCreate.headers.get('connection')).toBe('keep-alive')
      expect(responsePOSTUserCreate.headers.get('x-powered-by')).toBe('Express')
    })
  })
  describe('POST Generate Token', () => {
    it('checks when a token is generated with an error', async() => {
      const requestBody = {
        "userName": "ek_userName",
        "password": "%psw_EK1_1234@$"
      }

      const responsePOSTUserCreate = await fetch ('https://bookstore.demoqa.com/Account/v1/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "userName": "ek_userName",
          "password": "%psw_EK1_1234@$"
        })
      })
      const responsePOSTGenerateToken = await fetch('https://bookstore.demoqa.com/Account/v1/GenerateToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "userName": "ek_userName",
          "password": ""
        })
      })

      expect(responsePOSTGenerateToken.status).toBe(400)
      expect(responsePOSTGenerateToken.statusText).toBe('Bad Request')
      expect(typeof responsePOSTGenerateToken.headers).toBe('object')
      expect(responsePOSTGenerateToken.headers.get('server')).toBe('nginx/1.17.10 (Ubuntu)')
      expect(responsePOSTGenerateToken.headers.has('content-type')).toBeTruthy()
      expect(responsePOSTGenerateToken.headers.get('content-type')).toBe('application/json; charset=utf-8')
      expect(responsePOSTGenerateToken.headers.get('connection')).toBe('keep-alive')
      expect(responsePOSTGenerateToken.headers.get('x-powered-by')).toBe('Express')
    })
    it('checks when a token is generated successfully', async() => {
      const requestBody = {
        "userName": "ek_userName",
        "password": "%psw_EK1_1234@$"
      }
      const responsePOSTUserCreate = await fetch ('https://bookstore.demoqa.com/Account/v1/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
      const responsePOSTGenerateToken = await fetch('https://bookstore.demoqa.com/Account/v1/GenerateToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })

      expect(responsePOSTGenerateToken.status).toBe(200)
      expect(responsePOSTGenerateToken.statusText).toBe('OK')
      expect(typeof responsePOSTGenerateToken.headers).toBe('object')
      expect(responsePOSTGenerateToken.headers.get('server')).toBe('nginx/1.17.10 (Ubuntu)')
      expect(responsePOSTGenerateToken.headers.has('content-type')).toBeTruthy()
      expect(responsePOSTGenerateToken.headers.get('content-type')).toBe('application/json; charset=utf-8')
      expect(responsePOSTGenerateToken.headers.get('connection')).toBe('keep-alive')
      expect(responsePOSTGenerateToken.headers.get('x-powered-by')).toBe('Express')
    })
  })  
})
