export default function isParanthesisBalanced(array) {
  const stack = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "[" || array[i] === "{" || array[i] === "(") {
      stack.push(array[i]);
    } else {
      if (stack.length === 0) return false;
      const top = stack[stack.length - 1];
      if (
        (top === "(" && array[i] === ")") ||
        (top === "{" && array[i] === "}") ||
        (top === "[" && array[i] === "]")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length > 0 ? false : true;
}
