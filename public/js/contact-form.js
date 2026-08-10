(() => {
  const form = document.querySelector("[data-contact-form]");
  const button = document.getElementById("my-form-button");
  const status = document.getElementById("my-form-status");

  if (!(form instanceof HTMLFormElement) || !(button instanceof HTMLButtonElement) || !status) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    button.disabled = true;
    status.textContent = "Sending your message...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      const result = await response.json();
      status.textContent = result.message || "Your message could not be delivered. Please email us directly.";
      if (result.ok) form.reset();
    } catch {
      status.textContent = "Your message could not be delivered. Please email us directly.";
    } finally {
      button.disabled = false;
      window.turnstile?.reset();
    }
  });
})();
