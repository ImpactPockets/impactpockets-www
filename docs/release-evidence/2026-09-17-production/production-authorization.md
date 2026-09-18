# Production promotion instruction

User prompt: deploy to prod

Scope: promote the exact previously staged Impact Pockets candidate. The user issued this instruction after being informed that production was held for mobile PageSpeed 98/100/100/100 and incomplete remaining acceptance. Proceed as an explicit release exception; do not represent those checks as passing. Preserve all tested runtime bytes, apply the existing production environment configuration, preserve current production bindings and secrets, and verify live public responses. Commit reviewed changes and push the configured upstream after successful production deployment.
