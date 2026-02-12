import { Router } from "express"
import { z } from "zod"
import { Product } from "../../../domain/entities/Product"
import { productRepository } from "../../container"

const router = Router()

const schema = z.object({
  id: z.string(),
  name: z.string()
})

router.post("/", (req, res) => {

  const data = schema.parse(req.body)

  productRepository.create(
    new Product(data.id, data.name)
  )

  res.status(201).send()
})

export default router
