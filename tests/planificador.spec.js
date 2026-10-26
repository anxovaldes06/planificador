import { test, expect } from '@playwright/test';

test('Muestra el título de la app', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Planificador del curso' })).toBeVisible();
   
});

test('Permite añadir una nueva actualización', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Escribe lo que hiciste hoy').fill('Cantar');
  await page.getByPlaceholder('60 min').fill('5');
  await page.getByRole('button', { name: 'Añadir' }).click();
  await expect(page.getByRole('listitem')).toContainText(/Cantar.*5 min , baja/);
});