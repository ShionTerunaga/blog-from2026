import { visit } from "unist-util-visit";

const callouts = {
  info: { label: "Info", role: "note" },
  warning: { label: "Warning", role: "note" },
  alert: { label: "Alert", role: "alert" },
};

export default function remarkCallouts() {
  return (tree) => {
    visit(tree, "containerDirective", (node) => {
      const callout = callouts[node.name];
      if (!callout) return;

      const data = node.data || (node.data = {});
      data.hName = "aside";
      data.hProperties = {
        className: ["callout", `callout--${node.name}`],
        role: callout.role,
        ariaLabel: callout.label,
      };

      node.children.unshift({
        type: "paragraph",
        data: {
          hName: "div",
          hProperties: { className: ["callout__title"] },
        },
        children: [{ type: "text", value: callout.label }],
      });
    });
  };
}
