import * as prismic from '@prismicio/client'
import sm from '../../sm.json'

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

export const createClient = (config = {}) => {

  const client = prismic.createClient(endpoint, {
    accessToken: process.env.REACT_APP_PRISMIC_ACCESS_TOKEN,
    ...config,
    }
  )
    return client
}
