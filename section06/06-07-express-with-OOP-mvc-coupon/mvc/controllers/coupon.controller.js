import { CashService } from "./services/cash.service.js";

export class CouponController {
  buyCoupon = (req, res) => {
    // 1. 가진돈 검증하는 코드
    const cashService = new CashService(); //new를 통해 class cashService를 객체화하여 사용할 수 있다.
    const hasMoney = cashService.checkValue();

    // 2. 상품권 구매하는 코드
    if (hasMoney) {
      res.send("상품권 구매 성공!!!");
    }
    // 3.
  };
}
