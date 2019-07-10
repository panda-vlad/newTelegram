import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const instance = axios.create({
    baseURL: process.env.API_HOST,
    headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
  })
  