import { observable, action, computed, reaction } from "mobx";
import { CartItem, Item, Coupon } from "../interfaces";

export default class CartStore {
  @observable
  items: CartItem[] = [];
  @observable
  coupons: Coupon[] = [];
  /**
   * @returns boolean
   */
  check(): boolean {
    if (this.items.length === 3) {
      window.alert("장바구니에는 상품을 최대 3개까지 담을 수 있습니다.");
      return false;
    }
    return true;
  }

  /**
   * @description
   * 장바구니에 item을 추가합니다.
   * 장바구니에는 상품을 최대 3개까지 담을 수 있습니다.
   * @param  {Item} item
   */
  @action
  add(item: Item) {
    if (this.check()) {
      this.items.push({
        ...item,
        count: 1,
        selected: false
      });
    }
  }

  @action
  remove(item: Item) {
    const index = this.getCartItemIndex(item);
    this.items.splice(index, 1);
  }

  @action
  countUp(index: number) {
    this.items[index].count += 1;
  }

  @action
  countDown(index: number) {
    if (this.items[index].count === 1) return;
    this.items[index].count -= 1;
  }

  @action
  checkboxHandler(index: number) {
    this.items[index].selected = !this.items[index].selected;
  }

  @action
  allCheckboxHandler(e: React.ChangeEvent<HTMLInputElement>) {
    let flag = e.target.checked;
    this.items.forEach(item => (item.selected = flag));
  }

  @action
  setCoupons(coupons: Coupon[]) {
    this.coupons = coupons.map(coupon => ({
      ...coupon,
      selected: false
    }));
  }

  @action
  handleCouponCheckbox(index: number) {
    this.coupons[index].selected = !this.coupons[index].selected;
  }

  @computed
  get totalPrice(): string {
    // 쿠폰 사용 가능 총합
    const useCouponItemTotal = this.items.reduce(
      (sum: number = 0, item: CartItem) => {
        if (item.availableCoupon !== false && item.selected)
          return sum + item.price * item.count;
        return sum;
      },
      0
    );
    // 쿠폰 사용 불가능 총합
    const disuseCouponItemTotal = this.items.reduce(
      (sum: number = 0, item: CartItem) => {
        if (item.availableCoupon === false && item.selected)
          return sum + item.price * item.count;
        return sum;
      },
      0
    );

    // rate는 쿠폰 사용 가능 총합에 적용
    const rateCouponIndex = this.coupons.findIndex(
      coupon => coupon.type === "rate" && coupon.selected === true
    );
    // amount는 타입의 쿠폰은 그냥 조건 상관없이 총합에서 제외
    const amountCouponIndex = this.coupons.findIndex(
      coupon => coupon.type === "amount" && coupon.selected === true
    );

    let result = 0;
    if (rateCouponIndex > -1 && useCouponItemTotal > 0) {
      result = Math.floor(
        useCouponItemTotal * (this.coupons[rateCouponIndex].discountRate || 1)
      );
    }

    if (amountCouponIndex > -1 && useCouponItemTotal > 0) {
      result -= this.coupons[amountCouponIndex].discountAmount || 0;
    }

    result += disuseCouponItemTotal;
    return result.toLocaleString();
  }

  hasItem(item: Item): boolean {
    return this.getCartItemIndex(item) > -1;
  }

  /**
   * @param  {Item} item
   * @returns number 인덱스를 찾지 못하면 -1 반환
   */
  getCartItemIndex(item: Item): number {
    return this.items.findIndex(cart => cart.id === item.id);
  }
}
