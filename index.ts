const express = require('express')
const cors = require('cors')
const app = express()
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const port = process.env.PORT??3003

app.use(cors())

app.use(express.json())

app.post('/cadastroAluno', async (req: any, res: any) => {
  const { name, ra, semestre, date } = req.body

  console.log(name, ra, semestre, date)
  
   await prisma.aluno.create({
    data: {
      nome: name,
      ra,
      semestre,
      dateScann: date,
    }
  })
  res.json({ ok: true })
})


app.listen(port, () => {
  console.log(`Pai ta on na porta ${port}`)
})