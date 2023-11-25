export enum Direction {
  LEFT = "left",
  RIGHT = "right",
}

export interface ScrollItem {
  id: string;
  direction: Direction;
}

/**
 * Moves the elements from the sides of the screen
 * @param ids The ids of the elements to move
 * @param side The side to move the elements from
 * @returns void
 */
export function onScrollSlideFromSides(items: ScrollItem[]) {
  // Get the scroll position
  const scrollPosition = window.pageYOffset;

  // Get the elements
  items.forEach((item) => {
    const element = document.getElementById(item.id);

    if (!element) return;

    // Move the element in from the left
    if (item.direction === Direction.LEFT) {
      element.style.transform = `translateX(${scrollPosition}px)`;
    }

    // Move the element in from the right
    if (item.direction === Direction.RIGHT) {
      element.style.transform = `translateX(-${scrollPosition}px)`;
    }
  });
}
