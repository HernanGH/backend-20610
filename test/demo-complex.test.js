import supertest from 'supertest'
import { expect } from 'chai'


const URL = 'http://localhost:8080'

const request = supertest(URL)

describe('Server test with chai and supertest', () => {
  it('should return "fecha y hora" with status 200', async () => {
    const response = await request.get('/')

    expect(response.status).to.be.equal(200)
  })

  it('should return "fecha y hora" like a JSON', async () => {
    const response = await request.get('/')
    const payload = JSON.parse(response.text)

    expect(payload).to.have.property('FyH')
  })
})
