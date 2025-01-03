import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://prod.bigapplegreeters.net/volunteer/register');
  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('SpongeBob');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').fill('SquarePants');
  await page.locator('#address_1').click();
  await page.locator('#address_1').fill('Fake Address Line 1');
  await page.locator('#address_2').click();
  await page.locator('#address_2').fill('Fake Address Line 2');
  await page.locator('#city').click();
  await page.locator('#city').fill('Fake City');
  await page.locator('#state_province').selectOption('New York');
  await page.locator('#postal_code').click();
  await page.locator('#postal_code').fill('12345');
  await page.locator('#email').click();
  await page.locator('#email').fill('BigAppleTesting2312+Greeter@gmail.com');
  await page.locator('#phone_1').click();
  await page.locator('#phone_1').fill('123-456-7890');
  await page.locator('select[name="phone_1_type"]').selectOption('home');
  await page.locator('#work_experience').click();
  await page.locator('#work_experience').fill('This field is for "Describe you work and volunteer experience"');
  await page.locator('#statement_of_intent').click();
  await page.locator('#statement_of_intent').fill('This field is for "Why would you like to become a volunteer"');
  await page.locator('#reference_name').click();
  await page.locator('#reference_name').fill('Fake Reference');
  await page.locator('#reference_phone').click();
  await page.locator('#reference_phone').fill('098-765-4321');
  await page.locator('#reference_email').click();
  await page.locator('#reference_email').fill('Fakeemail@gmail.com');
  await page.getByRole('list').click();
  await page.getByRole('treeitem', { name: 'African American NY' }).click();
  await page.getByRole('treeitem', { name: 'Art' }).click();
  await page.locator('#other_interests_specialties').click();
  await page.locator('#other_interests_specialties').fill('This field is for "Additional Interests"');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading')).toContainText('Thank You !!');
  await expect(page.getByRole('main')).toContainText('You have successfully registered. We’ll review your application and get back to you soon. Go Back To the Site');
});