import { ListNode, fromList } from '@task-types/listNode';

export default function toHaveNodes(head: ListNode | null, nodes: number[]) {
  let node = head;
  const message = () =>
    `expected ${this.utils.printReceived(fromList(head))} to be ${this.utils.printExpected(
      `${nodes}`
    )}`;

  for (let i = 0; i < nodes.length; i++) {
    if (!node || node.val !== nodes[i]) return { message, pass: false };
    node = node.next;
  }

  return { message, pass: true };
}

declare global {
  namespace jest {
    interface Matchers<R, T = {}> {
      toHaveNodes(nodes: number[]): R;
    }
  }
}

expect.extend({ toHaveNodes });
