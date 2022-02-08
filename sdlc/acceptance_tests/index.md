
# Acceptance Test Specification

## Test Setup

1. If starting from a fresh clone, carry out the [Backend Fresh
   Build](../build/backend.md) instructions.
1. If environment is already built carry out the [Backend Refresh
   Database](../build/backend.md) instructions.
1. Carry out [Frontend Build](../build/frontend.md)

### Test Cases - Admin Interface

1. [ACC-001](./ACC-001.md)
1. [ACC-002](./ACC-002.md)

### Test Cases - Front End

If are using the same browser as per the Admin Interface tests then **log out of
the admin interface**. Without this you will get 403 errors due to CSRF tokens
not being present. This tutorial doesn't work through Session Authentication in
Django, everything is open, and if you are authenticated as an Django admin the
front end doesn't work.

1. [ACC-010](./ACC-010.md)
1. [ACC-011](./ACC-011.md)
1. [ACC-012](./ACC-012.md)
1. [ACC-013](./ACC-013.md)
1. [ACC-014](./ACC-014.md)



