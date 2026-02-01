import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import GenericPage from './GenericPage.page'

const mockData = {
  metadata: {
    tags: [],
    concepts: [],
  },
  sys: {
    space: {
      sys: {
        type: 'Link',
        linkType: 'Space',
        id: '44z457dilzrg',
      },
    },
    id: '5In6IiElKFEhEYTbeu8qOC',
    type: 'Entry',
    createdAt: '2026-01-30T14:18:40.027Z',
    updatedAt: '2026-01-30T14:18:40.027Z',
    environment: {
      sys: {
        id: 'master',
        type: 'Link',
        linkType: 'Environment',
      },
    },
    publishedVersion: 4,
    revision: 1,
    contentType: {
      sys: {
        type: 'Link',
        linkType: 'ContentType',
        id: 'page',
      },
    },
    locale: 'en-US',
  },
  fields: {
    internalName: 'Test Page',
    pageName: 'Test Page',
    url: '/test-page',
  },
}

describe('GenericPage', () => {
  it('renders a single H1', () => {
    render(<GenericPage entryData={mockData} />)

    // Get all H1 elements
    const h1s = screen.getAllByRole('heading', { level: 1 })
    expect(h1s).toHaveLength(1)
  })
})
