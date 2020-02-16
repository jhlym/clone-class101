import { observable, action } from "mobx";
import { CartItem, Item } from "../interfaces";

export default class CartStore {
  @observable
  items: CartItem[] = [];

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
        count: 1
      });
    }
  }

  @action
  remove(item: Item) {
    const index = this.getCartItemIndex(item);
    this.items.splice(index, 1);
  }

  @action
  countUp(item: CartItem) {
    const index = this.getCartItemIndex(item);
    this.items[index].count += 1;
  }

  @action
  countDown(item: CartItem) {
    const index = this.getCartItemIndex(item);
    if (this.items[index].count === 1) return;
    this.items[index].count -= 1;
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
