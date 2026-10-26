# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: planificador.spec.js >> Permite añadir una nueva actualización
- Location: tests\planificador.spec.js:9:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Escribe lo que has hecho hoy')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Planificador del curso" [level=1] [ref=e2]
  - heading "Añadir tareas :" [level=3] [ref=e3]
  - generic [ref=e4]:
    - textbox "Escribe lo que hiciste hoy" [ref=e5]
    - spinbutton "60 min" [ref=e6]
    - button "Añadir" [ref=e7] [cursor=pointer]
  - list
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Muestra el título de la app', async ({ page }) => {
  4  |   await page.goto('/');
  5  |   await expect(page.getByRole('heading', { name: 'Planificador del curso' })).toBeVisible();
  6  |    
  7  | });
  8  | 
  9  | test('Permite añadir una nueva actualización', async({ page}) => {
  10 |     await page.goto('/')
> 11 |     await page.getByPlaceholder('Escribe lo que has hecho hoy').fill('Cantar')
     |                                                                 ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  12 |     await page.getByPlaceholder('60 min').fill('s')
  13 |     await page.getByRole('button', {name: 'Añadir'}).click()
  14 |     await expect( page.getByText(/5 \(Baja\)/)).toBeVisible()
  15 | 
  16 | })
```