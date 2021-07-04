import { Rule } from "eslint"

export const noHello: Rule.RuleModule = {
  create(context) {
    return {
      Literal(node) {
        if (node.value === "hello") {
          context.report({ node, message: '"hello" is not allowed' })
        }
      },
      TemplateElement(node) {
        if (node.value.cooked === "hello") {
          context.report({ node, message: '"hello" is not allowed' })
        }
      },
    }
  }
}
