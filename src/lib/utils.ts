export function addToast(component: any) {
  document.dispatchEvent(
    new CustomEvent("toast-component", {
      detail: { component },
    })
  );
}
