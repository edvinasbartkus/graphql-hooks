import { Selector } from 'testcafe'
import globals from './globals'

fixture('Example app').page(globals.url)

test('The example renders a list of posts', async t => {
  const listItems = Selector('#app-root ul li')
  await t.expect(listItems.count).gt(1)
})
