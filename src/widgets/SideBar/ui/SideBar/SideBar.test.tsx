import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation'
import { SideBar } from './SideBar'

describe('Sidebar', () => {
  test('Render', () => {
    renderWithTranslation(<SideBar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('Toggle', () => {
    renderWithTranslation(<SideBar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
