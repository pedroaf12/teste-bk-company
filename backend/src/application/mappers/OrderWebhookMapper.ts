import { Order } from "../../domain/entities/Order";

export class OrderWebhookMapper {

  static toDomain(payload: any): Order {

    return new Order(
      payload.id,
      payload.buyer.buyerName,
      payload.buyer.buyerEmail,
      payload.lineItems.map((item: any) => ({
        productId: item.itemId,
        name: item.itemName,
        quantity: item.qty,
        unitPrice: item.unitPrice
      })),
      payload.totalAmount,
      new Date(payload.createdAt)
    )
  }
}
